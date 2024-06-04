
# Вступительное задание для Backend специалиста

## Задача

Ваша задача - продумать и разработать структуру API для кеширования данных на серверной части, а также контроля над кешем. Вы должны выбрать API из данного списка: [Public APIs](https://github.com/public-apis/public-apis#books-ov-file). Реализуйте in-memory кеш, который позволит приложению при запросе к API сначала проверить, имеются ли данные в кеше, и выполнять запрос только в том случае, если данные в кеше отсутствуют. Также, реализуйте методы очистки кеша и изменения размера кеша.

## Требования

1. Работоспособность приложения.

### Дополнительные пункты

2. Покрытие API документацией с помощью Swagger.
3. Построение архитектуры проекта с делением его на слои.

## Инструменты для проверки качества кода

1. [ESLint](https://eslint.org/) - инструмент для проверки и исправления проблем в коде на основе настраиваемых правил.
2. [Prettier](https://prettier.io/) - инструмент для форматирования кода согласно стандартам и кодстайлу.


## Порядок выполнения

1. Изучите список доступных API и выберите одно из них для реализации кеша.
2. Форкните данный репозиторий с заготовкой проекта, и создайте новый проект на Node.js с использованием Express в своем форкнутом репозитории, развивая имеющуюся заготовку.
3. Реализуйте in-memory кеш с методами для проверки наличия данных, добавления новых данных, очистки кеша и изменения размера кеша.
4. Разработайте API-маршруты для поддержки кеша: получение данных с проверкой наличия в кеше, обновление данных, очистка кеша и изменение размера кеша.
5. (Дополнительно) Реализуйте поддержку документации для вашего API с помощью Swagger.
6. (Дополнительно) Организуйте проект таким образом, чтобы соблюдалась архитектура с делением на слои.
7. Предоставьте ссылку на форкнутый репозиторий.

## Оценка

Ваша работа будет оцениваться по следующим критериям:

1. Работоспособность вашего приложения и корректное выполнение всех требуемых функций кеша.
2. (Дополнительно) Качество документации API с использованием Swagger: полнота и ясность описания всех маршрутов и параметров.
3. (Дополнительно) Архитектура проекта и деление на слои: организация кода, модульность и четкое разделение функций между различными частями приложения.

Мы желаем вам успехов в выполнении задания и рады будем видеть вас в числе наших студентов!