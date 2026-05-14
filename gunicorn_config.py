import multiprocessing

# Сетевой интерфейс и порт (Nginx будет проксировать запросы на этот сокет)
bind = "127.0.0.1:8088"

# Количество воркеров. Рекомендуемая формула: (2 * cores) + 1 
# Например, если у сервера 4 ядра, будет запущено 4×2+1=9 воркеров.
workers = min(multiprocessing.cpu_count() * 2, 8)

# Используем асинхронных workers (gevent) для обработки множества одновременных соединений 
worker_class = "gevent"
worker_connections = 1000

# Таймауты 
timeout = 120          # Время ожидания ответа от воркера
graceful_timeout = 30  # Время на graceful shutdown
keepalive = 5

# Логирование
accesslog = "/var/log/superset/gunicorn_access.log"
errorlog = "/var/log/superset/gunicorn_error.log"
capture_output = True
loglevel = "info"

# User/Group (должны совпадать с пользователем, от которого запускается сервис)
