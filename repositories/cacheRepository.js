const { CACHE_TIME_LIMIT } = require("../config/config");

class CacheRepository {
  constructor() {
    this.cache = new Map();
    this.sizeLimit = 100;
  }

  hasValue(key) {
    if (this.get(key) == undefined) return false;
    return true;
  }

  get(key) {
    const data = this.cache.get(key);
    if (data == undefined) {
      return undefined;
    }
    if (Date.now() - data.createdAt > CACHE_TIME_LIMIT) {
      this.delete(key);
      return undefined;
    }
    return data.value;
  }

  delete(key) {
    return this.cache.delete(key);
  }

  set(key, value) {
    if (this.cache.size >= this.sizeLimit) {
      this.cache.delete(this.cache.keys().next().value);
    }
    let data = {
      value,
      createdAt: Date.now(),
    }; //решил добавить время добавления в кеш, т.к. выбрал в качестве api WeatherAPI, а значит
    //данные в кеше не выйдет держать долго, т.к. погода постоянно меняется
    if (this.sizeLimit > 0) this.cache.set(key, data);
  }

  clear() {
    this.cache.clear();
  }

  setSizeLimit(newSize) {
    this.sizeLimit = newSize;
  }
}

module.exports = new CacheRepository();
