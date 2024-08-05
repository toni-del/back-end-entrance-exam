const cacheService = require("../services/cacheService");

class CacheController {
  clear(req, res) {
    try {
      cacheService.clear();
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  setSizeLimit(req, res) {
    const { size } = req.params;
    if (size == undefined) {
      return res.status(400).json({ error: "The parametr 'size' is required" });
    }
    if (isNaN(size)) {
      return res
        .status(400)
        .json({ error: "The parameter 'size' must be an integer" });
    }
    if (Number(size) < 0) {
      return res.status(400).json({error: "The parametr 'size' must be positive number"})
    }
    try {
      cacheService.setSizeLimit(Number(size));
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new CacheController();
