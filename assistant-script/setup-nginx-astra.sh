#!/bin/bash

# Скрипт настройки Nginx для Superset на Astra Linux

echo "Начало настройки Nginx для Superset на Astra Linux..."

# Шаг 1. Создание директорий для конфигурации сайтов (если не существуют)
sudo mkdir -p /etc/nginx/sites-available
sudo mkdir -p /etc/nginx/sites-enabled

# Шаг 2. Создание конфигурационного файла
CONFIG_FILE="/etc/nginx/sites-available/superset"

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

# Шаг 3. Создание символической ссылки для активации конфигурации
SYMLINK="/etc/nginx/sites-enabled/superset"
sudo ln -sf "$CONFIG_FILE" "$SYMLINK"
echo "Создана символическая ссылка: $SYMLINK"

# Шаг 4. Удаление стандартных конфигураций (если существуют)
DEFAULT_AVAILABLE="/etc/nginx/sites-available/default"
DEFAULT_ENABLED="/etc/nginx/sites-enabled/default"

if [ -f "$DEFAULT_AVAILABLE" ]; then
    echo "Удаление стандартного конфига из sites-available: $DEFAULT_AVAILABLE"
    sudo rm -f "$DEFAULT_AVAILABLE"
fi

if [ -f "$DEFAULT_ENABLED" ]; then
    echo "Удаление стандартного конфига из sites-enabled: $DEFAULT_ENABLED"
    sudo rm -f "$DEFAULT_ENABLED"
fi

# Шаг 5. Проверка синтаксиса конфигурации Nginx
echo "Проверка синтаксиса конфигурации Nginx..."
sudo nginx -t

if [ $? -ne 0 ]; then
    echo "Ошибка: синтаксис конфигурации Nginx некорректен. Проверьте файл $CONFIG_FILE"
    exit 1
fi

echo "Синтаксис конфигурации Nginx корректен"

# Шаг 6. Запуск или перезагрузка Nginx
if systemctl is-active --quiet nginx; then
    # Nginx уже запущен — выполняем перезагрузку конфигурации
    echo "Перезагрузка конфигурации Nginx..."
    sudo systemctl reload nginx
else
    # Nginx не запущен — запускаем сервис
    echo "Запуск сервиса Nginx..."
    sudo systemctl start nginx
fi

# Шаг 7. Включение автозапуска Nginx при загрузке системы
echo "Включение автозапуска Nginx..."
sudo systemctl enable nginx

# Шаг 8. Проверка статуса сервиса
echo "Проверка статуса Nginx..."
sudo systemctl status nginx --no-pager -l

echo "Настройка завершена успешно!"
