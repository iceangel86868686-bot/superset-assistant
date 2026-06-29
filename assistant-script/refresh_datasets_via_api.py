#!/usr/bin/env python
"""
Скрипт для обновления датасетов Superset через REST API.

Имитирует нажатие кнопок в UI:
  1. GET /api/v1/dataset/<pk> — получить текущие данные датасета (как при открытии формы Edit)
  2. PUT /api/v1/dataset/<pk> — отправить те же данные обратно (как нажатие Save)
  3. PUT /api/v1/dataset/<pk>/refresh — обновить колонки из БД (как нажатие Refresh columns)

Использование:
    python scripts/refresh_datasets_via_api.py
    python scripts/refresh_datasets_via_api.py --id 5,8,12
    python scripts/refresh_datasets_via_api.py --name "inventory"
    python scripts/refresh_datasets_via_api.py --base-url http://localhost:8088
    python scripts/refresh_datasets_via_api.py --username admin --password admin
"""

import argparse
import json
import logging
import sys
from typing import Any, Optional

import requests

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Конфигурация по умолчанию
# ---------------------------------------------------------------------------
DEFAULT_BASE_URL = "http://localhost:8088"
DEFAULT_USERNAME = "admin"
DEFAULT_PASSWORD = "admin"


class SupersetApiClient:
    """
    Клиент для REST API Superset.
    Автоматически логинится и получает CSRF-токен.
    """

    def __init__(
        self,
        base_url: str = DEFAULT_BASE_URL,
        username: str = DEFAULT_USERNAME,
        password: str = DEFAULT_PASSWORD,
    ):
        self.base_url = base_url.rstrip("/")
        self.session = requests.Session()
        self._login(username, password)

    # ------------------------------------------------------------------
    # Авторизация
    # ------------------------------------------------------------------
    def _login(self, username: str, password: str) -> None:
        """Авторизация через /api/v1/security/login и получение CSRF-токена."""
        logger.info("Авторизация: %s@%s", username, self.base_url)

        # Шаг 1: логинимся — получаем access_token
        # (CSRF не требуется для /security/login, т.к. это открытый эндпоинт)
        login_payload = {
            "username": username,
            "password": password,
            "provider": "db",
            "refresh": True,
        }
        resp = self.session.post(
            f"{self.base_url}/api/v1/security/login",
            json=login_payload,
            headers={
                "Referer": f"{self.base_url}/",
                "Content-Type": "application/json",
            },
        )
        resp.raise_for_status()
        token_data = resp.json()
        access_token = token_data.get("access_token")

        if not access_token:
            raise RuntimeError(
                f"Не удалось получить access_token. Ответ: {token_data}"
            )

        # Шаг 2: устанавливаем Bearer-токен
        self.session.headers.update(
            {
                "Authorization": f"Bearer {access_token}",
                "Referer": f"{self.base_url}/",
                "Content-Type": "application/json",
            }
        )

        # Шаг 3: получаем CSRF-токен (уже с Bearer-токеном)
        resp = self.session.get(f"{self.base_url}/api/v1/security/csrf_token/")
        resp.raise_for_status()
        csrf_data = resp.json()
        csrf_token = csrf_data.get("result")

        if csrf_token:
            self.session.headers.update({"X-CSRFToken": csrf_token})
            logger.debug("CSRF-токен получен")
        else:
            logger.debug("CSRF-токен не требуется (режим без сессии)")

        logger.info("Авторизация успешна")

    # ------------------------------------------------------------------
    # API-методы
    # ------------------------------------------------------------------
    def get_datasets(
        self, dataset_ids: Optional[list[int]] = None, name_filter: Optional[str] = None
    ) -> list[dict[str, Any]]:
        """
        Получить список датасетов через GET /api/v1/dataset/.
        Поддерживает фильтрацию по ID и имени.
        """
        params: dict[str, str] = {
            "q": json.dumps(
                {
                    "page": 0,
                    "page_size": 100,
                    "order_column": "table_name",
                    "order_direction": "asc",
                }
            )
        }

        resp = self.session.get(
            f"{self.base_url}/api/v1/dataset/", params=params
        )
        resp.raise_for_status()
        data = resp.json()
        datasets: list[dict[str, Any]] = data.get("result", [])

        # Фильтрация по ID
        if dataset_ids:
            id_set = set(dataset_ids)
            datasets = [ds for ds in datasets if ds.get("id") in id_set]

        # Фильтрация по имени таблицы
        if name_filter:
            name_lower = name_filter.lower()
            datasets = [
                ds
                for ds in datasets
                if name_lower in ds.get("table_name", "").lower()
            ]

        return datasets

    def get_dataset_detail(self, dataset_id: int) -> dict[str, Any]:
        """
        Получить детальную информацию о датасете.
        GET /api/v1/dataset/<pk> — имитирует открытие формы Edit в UI.
        """
        resp = self.session.get(
            f"{self.base_url}/api/v1/dataset/{dataset_id}"
        )
        resp.raise_for_status()
        data = resp.json()
        return data.get("result", {})

    def update_dataset(
        self, dataset_id: int, payload: dict[str, Any]
    ) -> dict[str, Any]:
        """
        Обновить датасет.
        PUT /api/v1/dataset/<pk> — имитирует нажатие Save в форме Edit.
        """
        logger.info("  PUT /api/v1/dataset/%d (Save)", dataset_id)
        resp = self.session.put(
            f"{self.base_url}/api/v1/dataset/{dataset_id}",
            json=payload,
        )

        if resp.status_code == 200:
            logger.info("    ✅ Датасет #%d сохранён", dataset_id)
            return resp.json()
        else:
            error_msg = self._extract_error(resp)
            raise RuntimeError(
                f"Ошибка сохранения датасета #{dataset_id}: "
                f"HTTP {resp.status_code} — {error_msg}"
            )

    def refresh_dataset(self, dataset_id: int) -> dict[str, Any]:
        """
        Обновить колонки датасета из реальной БД.
        PUT /api/v1/dataset/<pk>/refresh — имитирует нажатие Refresh columns.
        """
        logger.info("  PUT /api/v1/dataset/%d/refresh (Refresh columns)", dataset_id)
        resp = self.session.put(
            f"{self.base_url}/api/v1/dataset/{dataset_id}/refresh"
        )

        if resp.status_code == 200:
            logger.info("    ✅ Колонки датасета #%d обновлены", dataset_id)
            return resp.json()
        else:
            error_msg = self._extract_error(resp)
            raise RuntimeError(
                f"Ошибка refresh датасета #{dataset_id}: "
                f"HTTP {resp.status_code} — {error_msg}"
            )

    # ------------------------------------------------------------------
    # Вспомогательные методы
    # ------------------------------------------------------------------
    @staticmethod
    def _extract_error(resp: requests.Response) -> str:
        """Извлечь сообщение об ошибке из ответа API."""
        try:
            body = resp.json()
            msg = body.get("message", str(body))
            if isinstance(msg, dict):
                return json.dumps(msg, ensure_ascii=False)
            return str(msg)
        except (json.JSONDecodeError, AttributeError):
            return resp.text[:500]

    @staticmethod
    def build_update_payload(dataset_detail: dict[str, Any]) -> dict[str, Any]:
        """
        Сформировать payload для PUT /api/v1/dataset/<pk> из данных,
        полученных от GET /api/v1/dataset/<pk>.

        Берёт только поля, разрешённые для редактирования (edit_columns),
        и очищает колонки/метрики от полей, которые не принимает PUT-схема
        (changed_on, created_on, type_generic и т.д.).

        Также исключает поля, которые могут вызвать ошибки валидации при
        отправке без изменений (например, catalog для БД без multi-catalog).

        Это имитирует поведение UI: пользователь открывает Edit, ничего не меняет
        и нажимает Save.
        """
        # Поля датасета, которые можно отправлять при обновлении
        # (соответствует edit_columns в DatasetRestApi)
        editable_fields = [
            "table_name",
            "sql",
            "filter_select_enabled",
            "fetch_values_predicate",
            "catalog",
            "schema",
            "description",
            "main_dttm_col",
            "currency_code_column",
            "normalize_columns",
            "always_filter_main_dttm",
            "offset",
            "default_endpoint",
            "cache_timeout",
            "is_sqllab_view",
            "template_params",
            "owners",
            "columns",
            "metrics",
            "extra",
        ]

        # Поля, которые разрешены в DatasetColumnsPutSchema
        allowed_column_fields = {
            "id",
            "column_name",
            "type",
            "advanced_data_type",
            "verbose_name",
            "description",
            "expression",
            "extra",
            "filterable",
            "groupby",
            "is_active",
            "is_dttm",
            "python_date_format",
            "datetime_format",
            "uuid",
        }

        # Поля, которые разрешены в DatasetMetricsPutSchema
        allowed_metric_fields = {
            "id",
            "expression",
            "description",
            "extra",
            "metric_name",
            "metric_type",
            "d3format",
            "currency",
            "verbose_name",
            "warning_text",
            "uuid",
        }

        # Поля, которые НЕ нужно отправлять, если их значение не менялось.
        # Некоторые поля (например, catalog) при отправке вызывают валидацию,
        # которая может не пройти для БД без multi-catalog.
        # В режиме "просто сохранить" мы их пропускаем.
        skip_if_unchanged = {"catalog"}

        payload: dict[str, Any] = {}

        for field in editable_fields:
            if field not in dataset_detail:
                continue

            value = dataset_detail[field]

            # Пропускаем поля, которые могут вызвать ошибки валидации
            if field in skip_if_unchanged:
                continue

            # Owners приходят как список объектов {id, first_name, last_name},
            # а API ждёт список ID
            if field == "owners" and isinstance(value, list):
                payload[field] = [
                    owner["id"]
                    if isinstance(owner, dict) and "id" in owner
                    else owner
                    for owner in value
                ]

            # Колонки — очищаем от полей, не разрешённых PUT-схемой
            elif field == "columns" and isinstance(value, list):
                payload[field] = [
                    {
                        col_key: col_val
                        for col_key, col_val in col.items()
                        if col_key in allowed_column_fields
                    }
                    for col in value
                ]

            # Метрики — очищаем от полей, не разрешённых PUT-схемой
            elif field == "metrics" and isinstance(value, list):
                payload[field] = [
                    {
                        met_key: met_val
                        for met_key, met_val in met.items()
                        if met_key in allowed_metric_fields
                    }
                    for met in value
                ]

            else:
                payload[field] = value

        return payload


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Обновить датасеты Superset через REST API"
    )
    parser.add_argument(
        "--id",
        type=str,
        default=None,
        help="ID датасетов через запятую (например: 5,8,12)",
    )
    parser.add_argument(
        "--name",
        type=str,
        default=None,
        help="Фильтр по имени таблицы (поиск по части имени)",
    )
    parser.add_argument(
        "--base-url",
        type=str,
        default=DEFAULT_BASE_URL,
        help=f"Базовый URL Superset (по умолчанию: {DEFAULT_BASE_URL})",
    )
    parser.add_argument(
        "--username",
        type=str,
        default=DEFAULT_USERNAME,
        help=f"Имя пользователя (по умолчанию: {DEFAULT_USERNAME})",
    )
    parser.add_argument(
        "--password",
        type=str,
        default=DEFAULT_PASSWORD,
        help="Пароль (по умолчанию: admin)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Режим просмотра: только показать датасеты без обновления",
    )
    parser.add_argument(
        "--skip-refresh",
        action="store_true",
        help="Пропустить шаг Refresh columns (только Save)",
    )
    parser.add_argument(
        "--skip-save",
        action="store_true",
        help="Пропустить шаг Save (только Refresh columns)",
    )

    args = parser.parse_args()

    # Парсим ID датасетов
    dataset_ids: Optional[list[int]] = None
    if args.id:
        dataset_ids = [int(i.strip()) for i in args.id.split(",")]

    # Создаём клиент API
    client = SupersetApiClient(
        base_url=args.base_url,
        username=args.username,
        password=args.password,
    )

    # Получаем список датасетов
    logger.info("Получение списка датасетов...")
    datasets = client.get_datasets(
        dataset_ids=dataset_ids, name_filter=args.name
    )

    if not datasets:
        logger.warning("Датасеты не найдены")
        sys.exit(0)

    logger.info("Найдено датасетов: %d", len(datasets))

    if args.dry_run:
        logger.info("=" * 50)
        logger.info("РЕЖИМ DRY-RUN: датасеты не будут обновлены")
        logger.info("=" * 50)
        for ds in datasets:
            logger.info(
                "  #%(id)d | %(table_name)s | schema=%(schema)s | db=%(database_name)s",
                {
                    "id": ds.get("id"),
                    "table_name": ds.get("table_name"),
                    "schema": ds.get("schema"),
                    "database_name": ds.get("database", {}).get("database_name", "N/A"),
                },
            )
        sys.exit(0)

    # Обновляем каждый датасет
    success = 0
    failed = 0

    for ds in datasets:
        dataset_id = ds["id"]
        table_name = ds.get("table_name", "?")
        db_name = ds.get("database", {}).get("database_name", "N/A")

        logger.info(
            "Обработка датасета #%d: %s (БД: %s)",
            dataset_id,
            table_name,
            db_name,
        )

        try:
            # Шаг 1: получаем детальную информацию (как открытие Edit)
            logger.info("  GET /api/v1/dataset/%d (Edit)", dataset_id)
            detail = client.get_dataset_detail(dataset_id)

            # Шаг 2: отправляем PUT с теми же данными (как нажатие Save)
            if not args.skip_save:
                payload = client.build_update_payload(detail)
                client.update_dataset(dataset_id, payload)
            else:
                logger.info("  ⏭ Save пропущен (--skip-save)")

            # Шаг 3: обновляем колонки из БД (как нажатие Refresh columns)
            if not args.skip_refresh:
                client.refresh_dataset(dataset_id)
            else:
                logger.info("  ⏭ Refresh пропущен (--skip-refresh)")

            logger.info("  ✅ Датасет #%d полностью обновлён", dataset_id)
            success += 1

        except Exception as ex:
            logger.warning("  ❌ Ошибка: %s", ex)
            failed += 1

    # Итог
    logger.info("=" * 50)
    logger.info("ГОТОВО!")
    logger.info("  Успешно: %d", success)
    logger.info("  Ошибок: %d", failed)
    logger.info("=" * 50)

    sys.exit(0 if failed == 0 else 1)


if __name__ == "__main__":
    main()
