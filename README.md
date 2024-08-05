# WeatherCacheApi
WeatherCacheApi выступает в качестве посредника между клинетом и WeatherAPI, кэшируя данные полученные от WeatherAPI, чтобы оптимизировать процесс их получения клиентом.

## Содержание
- [Технологии](#технологии)
- [Использование](#использование)
- [Требования](#требования)
- [Запуск сервера в режиме Debug](#запуск-сервера-в-режиме-debug)
- [Документация](#документация)
- [Разработчик](#разработчик)
- [Контекст разработки](#контекст-разработки)

## Технологии
- [NodeJS](https://nodejs.org/en)
- [Swagger](https://swagger.io)

## Использование
После клонирования репозитория вы можете настроить приложение, задав нужные значение в файле config/config.js.

API_KEY: Ключ, для использования API. Можно получить на сайте [WeatherAPI](https://www.weatherapi.com), либо использовать по умолчанию.

API_URL: URL адресс WeatherAPI.

CACHE_TIME_LIMIT: Время жизни кэша в милисекундах. По истечению указанного срока, запись в кэше будет считаться не действительной.

PORT: Порт, по котрому будет реализован досутп к API.

После настройки config/config.js, необходимо установить все используемые зависимости.

Установите зависимости с помощью команды:
```sh
$ npm i
```

После установки всех необходимых пакетов можно приступить к запуску приложения.

Запустите приложение при помощи команды:
```sh
$ npm start
```

После запуска приложения, вы можете получить доступ к WeatherCacheAPI по следующему адрессу: (http://localhost:PORT), где PORT - соответсвующее значение из файла config/config.js.

Также порт, на котором запущенно приложение отображается в консоли:
```sh
Сервер запущен на порту 3000
```

## Требования
Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/) v8+.

## Запуск сервера в режиме Debug
Чтобы запустить сервер в Debug режиме, выполните команду в JavaScript Debug Console:
```sh
npm start
```

## Документация
Получить доступ к документации WeatherCacheAPI можно по следующему адрессу: (http://localhost:PORT/api-docs), где PORT - соответсвующее значение из файла config/config.js.

## Разработчик

- [Антон Володько](https://t.me/KiselSlava) — Разработчик

## Контекст разработки
Данный проект разработан в рамках отбора на курс Финтеха "JS разработчки" организованный АНО ДПО «Тинькофф Образование»