# Project State

## Overview
Сервер Apache Superset (далее — «проект»), развёрнутый на ALTLinux (host-15, 192.168.70.149), с обратным прокси nginx и входом по доменным учёткам (LDAP/FreeIPA). Используется для BI-дашбордов: визуализация данных инвентаризации устройств (БД `inventory`) и суперсет-метаданные (БД `superset`).

## Current Status
Рабочая версия. Вход работает одновременно по LDAP (домен `ald.astra.test`) и по локальным пользователям БД. HTTPS включён (самоподписанный сертификат). Созданы и закоммичены/запушены изменения LDAP-аутентификации. Ведутся работы над дашбордом «Изменения по периодам» на основе snapshot-diff из `inventory`.

## Architecture
- **nginx** (ALTLinux) — reverse proxy. Терминирует TLS на :443, редирект :80→:443, проксирует на gunicorn `127.0.0.1:8088`.
- **gunicorn** (`gunicorn_config.py`) — `worker_class=gevent`, bind `127.0.0.1:8088`, юзер `superset`.
- **Superset** (`superset_config.py`) — `SUPERSET_CONFIG_PATH` указывает на него; запускается через systemd `superset.service`.
- **PostgreSQL** — одна СУБД, две БД: `superset` (метаданные) и `inventory` (данные WMI-инвентаризации, источник для дашбордов).
- **Redis** — кэш/бэкенд результатов.

## Tech Stack
- Apache Superset (версия проекта в `/home/superset/superset-assistant`), venv `/home/superset/superset-assistant/venv` (Python 3.11).
- PostgreSQL, Redis, gunicorn+gevent, nginx.
- LDAP: FreeIPA каталог `ald.astra.test` (`192.168.71.96:389`), библиотека `python-ldap==3.4.7`.
- ОС сервера: ALTLinux (менеджер пакетов `apt-get`/`rpm`).

## Implemented
- **LDAP-аутентификация** (FreeIPA): `AUTH_LDAP_*` в конфиге, `AUTH_LDAP_SEARCH_FILTER = "(objectClass=posixAccount)"`.
- **Совместный вход «БД + домен»**: кастомный `LocalAndLdapSecurityManager` (подкласс `SupersetSecurityManager`) через `CUSTOM_SECURITY_MANAGER`; при неудаче LDAP пробует локальную БД.
- **`AUTH_ROLES_SYNC_AT_LOGIN = False`** — роли не перезаписываются при входе (назначаются вручную).
- **ReCaptcha отключён** (`RECAPTCHA_*` пустые), иначе `/login/` падал с `KeyError: RECAPTCHA_PUBLIC_KEY`.
- **HTTPS**: самоподписанный сертификат `/etc/ssl/certs/superset.crt` + key `/etc/ssl/private/superset.key`; nginx-конфиг с переключателем HTTP↔HTTPS; `SESSION_COOKIE_SECURE = True`.
- **python-ldap 3.4.7** установлен в venv; доустановлены dev-заголовки `python3.11-dev`, `libldap-devel`, `libsasl2-devel`.
- **Права**: `user` добавлен в sudoers (`/etc/sudoers.d/user`, NOPASSWD ALL).
- **Git**: коммит «Enable LDAP auth (FreeIPA) with local+domain login» (`68f9fbd427`) запушен в `origin/master`. Файлы: `superset_config.py`, `requirements/base.txt`.
- **Виртуальные датасеты** (источник `inventory`, Jinja `{{ from_dttm }}`/`{{ to_dttm }}`):
  - `id=77` «Jinja тест: ОС по дате сбора»;
  - `id=78` «Изменения за период (сводка)» — per-device: `deviceid, device_name, changes_count, session_in_period`;
  - `id=79` «Изменения за период (детали)» — журнал изменений по категориям (см. ниже).

## In Progress
- Дашборд **«Изменения по периодам»** (snapshot-diff). Логика деталей (id=79):
  - для каждого устройства берётся старт-снимок (последняя сборка `≤ from_dttm`, иначе ближайшая после) и энд-снимок (последняя `≤ to_dttm`, иначе ближайшая после);
  - сравнение по ядру категорий: `os, systeminfo, memoryinfo, processor, slot, logicaldisk, software, services, networkadapter, users`;
  - колонки: `deviceid, device_name, category, entity_id, change_type(ADDED/REMOVED/CHANGED), field_changed, old_value, new_value, snapshot_start_dt, snapshot_end_dt`;
  - UNCHANGED не выводится; ADDED = объект есть только в энд-снимке, REMOVED = только в старт-снимке.

## Planned
- Собрать на дашборде таблицу-чарт по `id=79` + нативный фильтр по `category`.
- Обновить «Сводку» (`id=78`) на новую логику снимков (сейчас на старой).
- (по желанию) признак «неполного снимка», чтобы отсекать ложные ADDED/REMOVED от недособранных данных.
- (по желанию) нормализация `systeminfo`-строк (trim) — убрать ложные CHANGED из-за скрытых пробелов/переводов строк.
- (по желанию) реальный SSL-сертификат вместо самоподписанного.

## Important Decisions
- Снимок на границу: «последний до, иначе ближайший после» (выбрано пользователем).
- Полные `old/new` по полям; все категории/поля сохраняем без подавления шума (выбрано пользователем).
- `AUTH_ROLES_SYNC_AT_LOGIN=False` — роли назначаются вручную.
- Снимки старт/энд всегда существуют (nearest-fallback) — исключает массовые ADDED/REMOVED из-за отсутствия снимка.
- `snapshot_*` сняты как временные (`is_dttm=false`), чтобы superset не накладывал свой дата-фильтр поверх Jinja-периода.

## Known Issues
- **OOM-падение PostgreSQL** из-за картезианского взрыва в `software` (NULL `productcode`). Исправлено: ключ `COALESCE(NULLIF(productcode,''), caption||'|'||version)`. При необходимости — `sudo systemctl start postgresql`.
- **Устройства без данных `os`** (~14 из 29): `device_name` пустой.
- **Шумные поля**: свободное место дисков (`freespace`), `logonscount`/`lastlogon` пользователей, `installdt` ПО — числа изменений завышены.
- **`systeminfo` CHANGED с одинаковыми old/new** — скрытые пробелы/CRLF в WMI-строках.
- **Самоподписанный сертификат** — предупреждение браузера.

## Project Structure (важные файлы)
- `/home/superset/superset-assistant/` — корень проекта superset (ASF Apache Superset).
  - `superset_config.py` — основной конфиг (LDAP, HTTPS-cookie, кастомный SecurityManager, ReCaptcha).
  - `gunicorn_config.py` — конфиг gunicorn.
  - `requirements/base.txt` — зависимости (добавлен `python-ldap==3.4.7`).
  - `superset/` — исходники superset (НЕ правки внутри).
  - `venv/` — виртуальное окружение Python 3.11.
  - `PROJECT_STATE.md` — этот файл.
- `/etc/nginx/sites-available.d/superset.conf` (symlink из `sites-enabled.d`) — nginx HTTPS/HTTP.
- `/etc/ssl/private/superset.key`, `/etc/ssl/certs/superset.crt` — сертификаты.
- `/etc/systemd/system/superset.service` — unit (User=superset).
- Логи: `/var/log/superset/gunicorn_error.log`, `/var/log/superset/gunicorn_access.log`.
- SQL-скрипты датасетов хранятся локально на рабочей машине в `C:\Users\vb\.ssh\` (`change_journal.sql`, `change_details.sql` и др.).

## TODO
- [ ] Собрать дашборд «Изменения по периодам» (таблица + фильтр category + Time Range).
- [ ] Обновить «Сводку» на новую логику снимков.
- [ ] Опционально: признак неполного снимка; trim systeminfo; реальный сертификат.
- [ ] Отозвать скомпрометированный GitHub PAT (был показан в логе сессии).

## Notes
- Период дашборда управляется селектором **Time Range** (даёт `from_dttm`/`to_dttm` в Jinja), а не фильтром по колонке.
- Вход: доменные учётки из каталога `ald.astra.test` + локальные админы БД. Bind-учётка FreeIPA: `uid=astrauser1,cn=users,cn=compat,dc=ald,dc=astra,dc=test`.
- Доступ к БД (superuser): `sudo -u postgres psql -d <db>` на сервере.
- Для создания/синка виртуальных датасетов используется запуск python-скриптов в venv от юзера `superset` с `SUPERSET_CONFIG_PATH=.../superset_config.py`; после создания — проставить `is_sqllab_view=true, catalog, perm` и при необходимости `fetch_metadata()`.
- Неправильный обход: nginx → gunicorn → superset → PostgreSQL/Redis. Порт 8088 слушает только 127.0.0.1.