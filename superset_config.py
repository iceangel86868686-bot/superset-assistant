import os
from datetime import timedelta
from redis import Redis
from typing import Any, Callable, Iterator, Literal, Optional, TYPE_CHECKING, TypedDict
from flask_caching.backends.rediscache import RedisCache
# ============================================================================
# 1. БАЗОВАЯ КОНФИГУРАЦИЯ И СЕКРЕТЫ (ОБЯЗАТЕЛЬНО ИЗМЕНИТЬ)
# ============================================================================
# Секрет JWT для асинхронных запросов (требуется, когда  GLOBAL_ASYNC_QUERIES = True)
#JWT_SECRET = 'rIYDj5INNutv/LC+gRtZiIMoSfck6HZY0IYYX9pagzqKoamhBblIcce/slLQ1hFP'  # замените на ваш сгенерированный ключ

# Минимальная длина JWT-секрета (в байтах)
#JWT_REQUIRED_LENGTH = 32


# Генерация SECRET_KEY: выполните в терминале `openssl rand -base64 42`
SECRET_KEY = 'odRFEE+vijEPupaYNAyO6+nOxfUplxQUEYYR4fHHrGAYx6+7mkq9xQ+h'  # ЗАМЕНИТЕ НА РЕАЛЬНЫЙ КЛЮЧ!

# Отключаем режим отладки ВСЕГДА в production
DEBUG = False
ENABLE_CORS = False

# ============================================================================
# 2. ПОДКЛЮЧЕНИЕ К БАЗЕ ДАННЫХ МЕТАДАННЫХ (PostgreSQL)
# ============================================================================
# Формат: postgresql+psycopg2://user:password@host:port/dbname
SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://superset:superset@localhost:5432/superset'

# Настройки пула соединений для повышения производительности 
SQLALCHEMY_ENGINE_OPTIONS = {
    'pool_size': 20,          # Количество постоянных соединений
    'pool_timeout': 30,       # Таймаут ожидания свободного соединения (сек)
    'pool_recycle': 3600,     # Пересоздавать соединения через 1 час
    'max_overflow': 30,       # Максимальное количество временных соединений сверх pool_size
    'pool_pre_ping': True,    # Проверять соединение перед использованием
}

# ============================================================================
# 3. КЭШИРОВАНИЕ И БЭКЕНД ДЛЯ РЕЗУЛЬТАТОВ (Redis)
# ============================================================================
REDIS_HOST = 'localhost'      #  хост, на котором запущен Redis (в данном случае локальная машина).
REDIS_PORT = 6379             #  порт для подключения (стандартный порт Redis).
REDIS_PASSWORD = 'redis'      #  пароль для аутентификации в Redis (должен быть заменён на реальный).
REDIS_CACHE_DB = 0            #  номер базы данных Redis для основного кэша Superset.
REDIS_RESULTS_DB = 1          #  номер базы данных для хранения результатов асинхронных запросов.
REDIS_CELERY_BROKER_DB = 2    #  номер базы для Celery Broker (очереди задач).
REDIS_CELERY_RESULT_DB = 3    #  номер базы для результатов Celery.
REDIS_SESSION_DB = 4          #  номер базы для хранения сессий пользователей.

# Конфигурация основного кэша Superset:
CACHE_CONFIG = {
    #  указывает, что для кэширования используется Redis.
    'CACHE_TYPE': 'RedisCache',
    # Строка подключения к Redis для кэша. 
    # Формируется на основе ранее заданных переменных: использует пароль, хост, порт и базу № 0
    'CACHE_REDIS_URL': f'redis://:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/{REDIS_CACHE_DB}',
    #  время жизни кэшированных данных: 300 секунд (5 минут). После истечения этого срока данные автоматически удаляются.
    'CACHE_DEFAULT_TIMEOUT': 300,
    # префикс для ключей кэша. Все ключи в Redis будут начинаться с superset_cache:.
    'CACHE_KEY_PREFIX': 'superset_cache',
}

# Дублирует настройки основного кэша для кэширования данных.
# Это позволяет кэшировать результаты запросов к БД, ускоряя загрузку дашбордов и чартов.
DATA_CACHE_CONFIG = CACHE_CONFIG

# Бэкенд для хранения результатов асинхронных запросов 
RESULTS_BACKEND = RedisCache(
    host=REDIS_HOST,
    port=REDIS_PORT,
    password=REDIS_PASSWORD,
    db=REDIS_RESULTS_DB,  # Явно указываем базу данных (у вас это 1)
    key_prefix='superset_results',
    default_timeout=86400
)

# ============================================================================
# 4. CELERY ДЛЯ АСИНХРОННЫХ ЗАДАЧ И ALERTS 
# ============================================================================
#class CeleryConfig:
    # использует Redis (база № 2, REDIS_CELERY_BROKER_DB);
 #   broker_url = f'redis://:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/{REDIS_CELERY_BROKER_DB}'
    # использует Redis (база № 3, REDIS_CELERY_RESULT_DB);
  #  result_backend = f'redis://:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/{REDIS_CELERY_RESULT_DB}'
   # imports = ('superset.sql_lab', 'superset.tasks.scheduler')
    #worker_prefetch_multiplier = 1 # Важно для асинхронных воркеров (gevent/eventlet)
    #task_acks_late = True
#    worker_max_tasks_per_child = 1000 # Перезапуск воркеров для предотвращения утечек памяти
#    task_serializer = 'json'
#    result_serializer = 'json'
#    accept_content = ['json']
#    timezone = 'UTC'

#CELERY_CONFIG = CeleryConfig

# Включение асинхронных запросов и отчетов
#FEATURE_FLAGS = {
    # позволяет выполнять длительные SQL‑запросы в фоне;
 #   "GLOBAL_ASYNC_QUERIES": False,
    # включает функционал автоматических оповещений
#  "ALERT_REPORTS": True,
    # даёт возможность настраивать права доступа к отдельным дашбордам
 #   "DASHBOARD_RBAC": True,
#}

# ============================================================================
# 5. БЕЗОПАСНОСТЬ И СЕССИИ (КРИТИЧЕСКИ ВАЖНЫЙ РАЗДЕЛ) 
# ============================================================================
# Храним сессии на стороне сервера в Redis
# Сессии хранятся на сервере (в Redis), а не в cookies браузера
SESSION_SERVER_SIDE = True
# Указывает, что для хранения сессий используется Redis.
SESSION_TYPE = 'redis'
# Настраивает подключение к Redis для хранения сессий
SESSION_REDIS = Redis(
    host=REDIS_HOST,
    port=REDIS_PORT,
    password=REDIS_PASSWORD,
    db=REDIS_SESSION_DB,     # номер базы Redis для сессий (база № 4)
    ssl=False,               #  SSL не используется/используется для продакшена рекомендуется включить
)

SESSION_USE_SIGNER = True # Подписываем ID сессии
PERMANENT_SESSION_LIFETIME = timedelta(hours=8) # Макс. время жизни сессии (не 31 день!)

# Настройки безопасности cookies (работают только с HTTPS через Nginx)
SESSION_COOKIE_SECURE = False   # Передавать cookie только по HTTPS
SESSION_COOKIE_HTTPONLY = True # Запретить доступ к cookie через JavaScript
SESSION_COOKIE_SAMESITE = 'Lax' # Защита от CSRF-атак

# Включение Flask-Talisman для security headers (CSP, HSTS и др.)
#TALISMAN_ENABLED = True
#TALISMAN_CONFIG = {
#    'content_security_policy': {
#        'default-src': ["'self'"],
#        'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
#        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
#        'img-src': ["'self'", "data:", "https://*.mapbox.com", "https://gravatar.com"],
#        'connect-src': ["'self'", "https://*.mapbox.com", "https://events.mapbox.com"],
#    },
#    'force_https': False, # Пусть Nginx занимается редиректом на HTTPS
#    'strict_transport_security': True,
#    'strict_transport_security_max_age': 31536000, # 1 год HSTS
#}

ENABLE_PROXY_FIX = True # Для корректной работы за reverse proxy
PROXY_FIX_CONFIG = {'x_for': 1, 'x_proto': 1, 'x_host': 1, 'x_port': 1}

# ============================================================================
# 6. ПРОИЗВОДИТЕЛЬНОСТЬ И ЛИМИТЫ
# ============================================================================
#SUPERSET_WEBSERVER_TIMEOUT = 300 # Таймаут для длительных запросов (сек) 
#SUPERSET_WEBSERVER_WORKERS = 9 # Должно соответствовать количеству workers Gunicorn
#SQL_MAX_ROW = 100000 # Макс. строк в результатах запроса
#QUERY_SEARCH_LIMIT = 1000 # Лимит поиска запросов
#DISALLOWED_SQL_FUNCTIONS = ['sleep', 'pg_sleep'] # Запрещенные SQL-функции

# ============================================================================
# 7. ЛОГИРОВАНИЕ 
# ============================================================================
import logging
LOG_LEVEL = 'INFO'
LOG_FORMAT = '%(asctime)s:%(levelname)s:%(name)s:%(message)s'
LOG_TO_FILE = True
LOG_FILE_PATH = '/var/log/superset/superset.log' # Убедитесь, что директория существует и доступна для записи

# ---------------------------------------------------
# Babel config for translations
# ---------------------------------------------------
from superset.translations.utils import get_language_pack

def bootstrap_overrides(bootstrap_data):
 bootstrap_data["locale"] = "ru"
 bootstrap_data["language_pack"] = get_language_pack("ru")
 return bootstrap_data

COMMON_BOOTSTRAP_OVERRIDES_FUNC = bootstrap_overrides
# Setup default language
BABEL_DEFAULT_LOCALE = "ru"
DEFAULT_LOCALE = 'ru'
# Your application default translation path
BABEL_DEFAULT_FOLDER = "superset/translations"
# The allowed translation for your app
LANGUAGES = {
    "en": {"flag": "us", "name": "English"},
 #   "es": {"flag": "es", "name": "Spanish"},
 #   "it": {"flag": "it", "name": "Italian"},
 #   "fr": {"flag": "fr", "name": "French"},
 #   "zh": {"flag": "cn", "name": "Chinese"},
 #   "zh_TW": {"flag": "tw", "name": "Traditional Chinese"},
 #   "ja": {"flag": "jp", "name": "Japanese"},
 #   "de": {"flag": "de", "name": "German"},
 #   "pl": {"flag": "pl", "name": "Polish"},
 #   "pt": {"flag": "pt", "name": "Portuguese"},
 #   "pt_BR": {"flag": "br", "name": "Brazilian Portuguese"},
    "ru": {"flag": "ru", "name": "Russian"},
 #   "ko": {"flag": "kr", "name": "Korean"},
 #   "sk": {"flag": "sk", "name": "Slovak"},
 #   "sl": {"flag": "si", "name": "Slovenian"},
 #   "nl": {"flag": "nl", "name": "Dutch"},
 #   "uk": {"flag": "uk", "name": "Ukranian"},
 #   "mi": {"flag": "nz", "name": "Māori"},
}
# Turning off i18n by default as translation in most languages are
# incomplete and not well maintained.
#LANGUAGES = {}


# Override the default d3 locale format
# Default values are equivalent to
# D3_FORMAT = {
#     "decimal": ".",           # - decimal place string (e.g., ".").
#     "thousands": ",",         # - group separator string (e.g., ",").
#     "grouping": [3],          # - array of group sizes (e.g., [3]), cycled as needed.
#     "currency": ["$", ""]     # - currency prefix/suffix strings (e.g., ["$", ""])
# }
# https://github.com/d3/d3-format/blob/main/README.md#formatLocale
class D3Format(TypedDict, total=False):
    decimal: str
    thousands: str
    grouping: list[int]
    currency: list[str]


D3_FORMAT: D3Format = {}

# Override the default mapbox tiles
# Default values are equivalent to
# DECKGL_BASE_MAP = [
#   ['https://tile.openstreetmap.org/{z}/{x}/{y}.png', 'Streets (OSM)'],
#   ['https://tile.osm.ch/osm-swiss-style/{z}/{x}/{y}.png', 'Topography (OSM)'],
#   ['mapbox://styles/mapbox/streets-v9', 'Streets'],
#   ['mapbox://styles/mapbox/dark-v9', 'Dark'],
#   ['mapbox://styles/mapbox/light-v9', 'Light'],
#   ['mapbox://styles/mapbox/satellite-streets-v9', 'Satellite Streets'],
#   ['mapbox://styles/mapbox/satellite-v9', 'Satellite'],
#   ['mapbox://styles/mapbox/outdoors-v9', 'Outdoors'],
# ]
# for adding your own map tiles, you can use the following format:
# - tile:// + your_personal_url or openstreetmap_url
#   example:
#   DECKGL_BASE_MAP = [
#       ['tile://https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', 'OpenStreetMap']
#    ]
# Enable CORS and set map url in origins option.
# Add also map url in connect-src of TALISMAN_CONFIG variable
DECKGL_BASE_MAP: list[list[str, str]] = None


# Override the default d3 locale for time format
# Default values are equivalent to
# D3_TIME_FORMAT = {
#     "dateTime": "%x, %X",
#     "date": "%-m/%-d/%Y",
#     "time": "%-I:%M:%S %p",
#     "periods": ["AM", "PM"],
#     "days": ["Sunday", "Monday", "Tuesday", "Wednesday",
#              "Thursday", "Friday", "Saturday"],
#     "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
#     "months": ["January", "February", "March", "April",
#                "May", "June", "July", "August",
#                "September", "October", "November", "December"],
#     "shortMonths": ["Jan", "Feb", "Mar", "Apr",
#                     "May", "Jun", "Jul", "Aug",
#                     "Sep", "Oct", "Nov", "Dec"]
# }
# https://github.com/d3/d3-time-format/tree/main#locales
class D3TimeFormat(TypedDict, total=False):
    date: str
    dateTime: str
    time: str
    periods: list[str]
    days: list[str]
    shortDays: list[str]
    months: list[str]
    shortMonths: list[str]


D3_TIME_FORMAT: D3TimeFormat = {}

CURRENCIES = ["USD", "EUR", "GBP", "INR", "MXN", "JPY", "CNY"]

# ============================================================================
# ШРИФИТ
# ============================================================================

THEME_DEFAULT = {
    "token": {
        "fontFamily": "Manrope",
    }
}

THEME_DARK = {
    "algorithm": "dark",  
    "token": {
        "fontFamily": "Manrope",
    }
}
# ============================================================================
# Логотип
# ============================================================================
FAVICONS = [{"href": "/static/assets/images/LogoPR_32х32.png"}]
APP_ICON = "/static/assets/images/logo300x100.png"
