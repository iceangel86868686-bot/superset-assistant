#!/bin/bash

# Скрипт настройки Nginx для Superset на RedOS

echo "Начало настройки Nginx на RedOS..."

# Шаг 1. Создание конфигурационного файла
CONFIG_FILE="/etc/nginx/conf.d/superset.conf"

cat > "$CONFIG_FILE" << 'EOF'
server {
    listen 80;
    server_name yourdomain.superset.ru;

    location / {
        proxy_pass http://127.0.0.1:8088;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

echo "Конфигурационный файл создан: $CONFIG_FILE"

# Шаг 2. Удаление стандартной конфигурации (если существует)
DEFAULT_CONF="/etc/nginx/conf.d/default.conf"
if [ -f "$DEFAULT_CONF" ]; then
    echo "Удаление стандартного конфига: $DEFAULT_CONF"
    sudo rm -f "$DEFAULT_CONF"
fi

# Шаг 3. Проверка синтаксиса конфигурации Nginx
echo "Проверка синтаксиса конфигурации Nginx..."
sudo nginx -t

if [ $? -ne 0 ]; then
    echo "Ошибка: синтаксис конфигурации Nginx некорректен. Проверьте файл $CONFIG_FILE"
    exit 1
fi

echo "Синтаксис конфигурации Nginx корректен"

# Шаг 4. Запуск или перезагрузка Nginx
if systemctl is-active --quiet nginx; then
    # Nginx уже запущен — выполняем перезагрузку конфигурации
    echo "Перезагрузка конфигурации Nginx..."
    sudo systemctl reload nginx
else
    # Nginx не запущен — запускаем сервис
    echo "Запуск сервиса Nginx..."
    sudo systemctl start nginx
fi

# Шаг 5. Включение автозапуска Nginx при загрузке системы
echo "Включение автозапуска Nginx..."
sudo systemctl enable nginx

# Шаг 6. Проверка статуса сервиса
echo "Проверка статуса Nginx..."
sudo systemctl status nginx --no-pager -l

echo "Настройка завершена успешно!"
