const cacheRepository = require('../repositories/cacheRepository')

class CacheService {
    clear() {
        cacheRepository.clear()
    }

    setSizeLimit(newSize) {
        cacheRepository.setSizeLimit(newSize)
    }
}

module.exports = new CacheService()