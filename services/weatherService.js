const axios = require("axios");
const cacheRepository = require("../repositories/cacheRepository");
const weatherRepository = require("../repositories/weatherRepository");

class WeatherService {
  async getWeather(location) {
    const cachedData = cacheRepository.get(location);
    if (cachedData != undefined) {
      const data = {
        response: cachedData,
        err: undefined,
      };
      return data;
    }
    const data = await weatherRepository.getWeather(location);
    if (!data.err) {
      cacheRepository.set(location, data.response);
      return data;
    } else {
      return data;
    }
  }

  async updateWeather(location) {
    const data = await weatherRepository.getWeather(location);
    if (!data.err) {
      cacheRepository.set(location, data.response);
      return data;
    } else {
      return data;
    }
  }
}

module.exports = new WeatherService();
