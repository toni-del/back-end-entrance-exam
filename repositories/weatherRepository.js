const axios = require("axios");
const { API_URL, API_KEY } = require("../config/config");

class WeatherRepository {
  async getWeather(location) {
    try {
      const response = await axios.get(
        `${API_URL}/current.json?key=${API_KEY}&q=${location}&aqi=no`,
      );
      const result = {
        response: response.data,
        err: undefined,
        fromCache: false,
      };
      return result;
    } catch (error) {
      const result = {
        response: error.response,
        err: error.response.data.error,
        fromCache: false,
      };
      return result;
    }
  }
}

module.exports = new WeatherRepository();
