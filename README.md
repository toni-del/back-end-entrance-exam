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
### Настройка
После клонирования репозитория вы можете настроить приложение, задав нужные значение в файле config/config.js.

- API_KEY: Ключ, для использования API. Можно получить на сайте [WeatherAPI](https://www.weatherapi.com), либо использовать по умолчанию.
- API_URL: URL адресс WeatherAPI.
- CACHE_TIME_LIMIT: Время жизни кэша в милисекундах. По истечению указанного срока, запись в кэше будет считаться не действительной.
- PORT: Порт, по котрому будет реализован досутп к API.

После настройки config/config.js, необходимо установить все используемые зависимости.

### Установка зависимостей
Установите зависимости с помощью команды:
```sh
$ npm i
```

После установки всех необходимых пакетов можно приступить к запуску приложения.

### Запуск
Запустите приложение при помощи команды:
```sh
$ npm start
```

После запуска приложения, вы можете получить доступ к WeatherCacheAPI по следующему адрессу: (http://localhost:PORT), где PORT - соответсвующее значение из файла config/config.js.

Также порт, на котором запущенно приложение отображается в консоли:
```sh
Сервер запущен на порту 3000
```

### Запросы
В WeatherCacheAPI реализованы 3 типа запросов:

#### GET /weather
Предоставляет данные о погоде в указанном городе.
Параметры:
- location: Город, погоду которого, вы хотите получить
- cacheIgnore(необязательный): Если указать этому параметру значение true, то запрос к WeatherAPI выполнится в независимости от того, находятся данные в кэше или нет. Моет быть полезно для актуализации данных.

Пример запроса:
```sh
http://localhost:3000/weather?location=london&cacheIgnore=true
```

Заголовки:
```sh
connection: keep-alive 
 content-length: 774 
 content-type: application/json; charset=utf-8 
 date: Mon,05 Aug 2024 03:26:19 GMT 
 etag: W/"306-lUQX5sBcnQ9aaq5o+f8HcFc9GRA" 
 keep-alive: timeout=5 
 x-powered-by: Express 
 x-source: external 
```

Стоит обратить внимание на заголовок "x-source". Благодаря нему можно понять откуда были получены данные.(external - WeatherAPI / cache - кэш).

Ответ: 200
```sh
{
  "location": {
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom",
    "lat": 51.52,
    "lon": -0.11,
    "tz_id": "Europe/London",
    "localtime_epoch": 1722828287,
    "localtime": "2024-08-05 4:24"
  },
  "current": {
    "last_updated_epoch": 1722827700,
    "last_updated": "2024-08-05 04:15",
    "temp_c": 15,
    "temp_f": 59,
    "is_day": 0,
    "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
    },
    "wind_mph": 5.6,
    "wind_kph": 9,
    "wind_degree": 215,
    "wind_dir": "SW",
    "pressure_mb": 1013,
    "pressure_in": 29.91,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 83,
    "cloud": 11,
    "feelslike_c": 15,
    "feelslike_f": 59,
    "windchill_c": 15,
    "windchill_f": 59,
    "heatindex_c": 15,
    "heatindex_f": 59,
    "dewpoint_c": 12.2,
    "dewpoint_f": 53.9,
    "vis_km": 10,
    "vis_miles": 6,
    "uv": 1,
    "gust_mph": 8.3,
    "gust_kph": 13.3
  }
}
```

В ответе предоставлена различная информация о погоде, пригодная для последующей обработки.

#### DELETE /cache
Очищает кэш.
Параметры: нет

Пример запроса:
```sh
http://localhost:3000/cache
```

Заголовки:
```sh
 connection: keep-alive 
 date: Mon,05 Aug 2024 03:34:12 GMT 
 etag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI" 
 keep-alive: timeout=5 
 x-powered-by: Express 
```

Ответ: 204

Статус код 204, говорит нам о том, что очистка кэша была выполнена успешно.

#### PUT /cache/{size}
Устанавливает новое максимальное количество эллементов в кэше.
Параметры:
- size: Новое максимальное количество эллементов в кэше

Пример запроса:
```sh
http://localhost:3000/cache/100
```

Заголовки:
```sh
 connection: keep-alive 
 date: Mon,05 Aug 2024 03:34:12 GMT 
 etag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI" 
 keep-alive: timeout=5 
 x-powered-by: Express 
```

Ответ: 204

Статус код 204, говорит нам о том, что изменение максимального количества эллементов в кэше выполненно успешно.

Более подробно с API вы можете познакомиться в документации к API. (см. [Документация](#документация))

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