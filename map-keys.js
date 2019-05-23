const mapObj = require(`map-obj`)

module.exports = (obj, fn) => mapObj(obj, (key, value) => [ fn(key), value ], { deep: true })
