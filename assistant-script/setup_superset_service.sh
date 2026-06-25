#!/bin/bash

# Файл: setup_superset_service.sh

SERVICE_FILE="/etc/systemd/system/superset.service"
SERVICE_CONTENT="[Unit]
Description=Apache Superset Gunicorn Server
After=network.target redis-server.service
Wants=postgresql.service redis-server.service

[Service]
Type=simple
User=superset
Group=superset
WorkingDirectory=/home/superset/superset-assistant
Environment=\"SUPERSET_CONFIG_PATH=/home/superset/superset-assistant/superset_config.py\"
Environment=\"PATH=/home/superset/superset-assistant/venv/bin\"
ExecStart=/home/superset/superset-assistant/venv/bin/gunicorn -c /home/superset/superset-assistant/gunicorn_config.py superset.app:create_app()
TimeoutStartSec=300
Restart=on-failure
RestartSec=10
TimeoutStopSec=90
KillMode=mixed
PrivateTmp=true
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target"

# Проверка прав суперпользователя
if [ "$EUID" -ne 0 ]; then
  echo "Ошибка: скрипт нужно запускать с правами суперпользователя (sudo)"
  exit 1
fi

# Создание файла сервиса
echo "$SERVICE_CONTENT" > "$SERVICE_FILE"

# Установка правильных прав доступа
chmod 644 "$SERVICE_FILE"

# Перезагрузка systemd
systemctl daemon-reload

# Включение автозапуска при загрузке
systemctl enable superset.service

echo "Сервис Superset успешно настроен!"
echo "Для запуска выполните: sudo systemctl start superset.service"
