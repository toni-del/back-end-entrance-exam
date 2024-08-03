const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const cacheController = require('../controllers/cacheController')

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: API для получения данных о погоде
 */

/**
 * @swagger
 * tags:
 *   name: Cache
 *   description: API для управления кэшем
 */

/**
 * @swagger
 * /weather:
 *   get:
 *     summary: Получить данные о погоде
 *     tags: [Weather]
 *     parameters:
 *       - name: location
 *         in: query
 *         required: true
 *         description: Название города
 *         schema:
 *           type: string
 *       - name: cacheIgnore
 *         in: query
 *         required: false
 *         description: Записать эллемент внезависимости от наличия его в кэше
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Успешный ответ с данными о погоде
 *       400:
 *         description: Неверный запрос
 *       500:
 *         description: Ошибка сервера при получении погоды
 */
router.get('/weather', weatherController.getWeather)

/**
 * @swagger
 * /cache:
 *   delete:
 *     summary: Очистить кэш
 *     tags: [Cache]
 *     responses:
 *       204:
 *         description: Кэш успешно очищен
 *       500:
 *         description: Ошибка сервера при очистке кэша
 */
router.delete('/cache', cacheController.clear)

/**
 * @swagger
 * /cache/{size}:
 *   put:
 *     summary: Установить лимит размера кэша
 *     tags: [Cache]
 *     parameters:
 *       - name: size
 *         in: path
 *         required: true
 *         description: Новый лимит размера кэша (в количестве элементов)
 *         schema:
 *           type: integer
 *           example: 100
 *     responses:
 *       204:
 *         description: Лимит размера кэша успешно обновлен
 *       400:
 *         description: Параметр size указан не верно или не указан вовсе
 *       500:
 *         description: Ошибка сервера при установке лимита размера кэша
 */
router.put('/cache/:size', cacheController.setSizeLimit)

module.exports = router