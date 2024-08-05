const weatherService = require("../services/weatherService");

class WeatherController {
  async getWeather(req, res) {
    const { location, cacheIgnore } = req.query;
    if (location == undefined) {
      return res
        .status(400)
        .json({ error: "The parametr 'location' is required" });
    }
    if (location == "") {
      return res
        .status(400)
        .json({ error: "The parametr 'location' is missing" });
    }
    try {
      let data;
      if (cacheIgnore && cacheIgnore == "true") {
        data = await weatherService.updateWeather(location);
        res.setHeader("X-Source", "external");
      } else {
        data = await weatherService.getWeather(location);
        if (data.fromCache) res.setHeader("X-Source", "cache");
        else res.setHeader("X-Source", "external");
      }
      if (data.err)
        return res.status(data.response.status).json(data.err.message);
      return res.status(200).json(data.response);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new WeatherController();
