const mapObj = require(`map-obj`)
const filterObj = require(`filter-obj`)
const toCamelCase = require(`just-camel-case`)

const mapKeys = (obj, fn) => mapObj(obj, (key, value) => [ fn(key), value ], { deep: true })

module.exports = (object, prefix) => {
	const prefixICareAbout = prefix + `-`
	return mapKeys(
		filterObj(object, (key, value) => key.startsWith(prefixICareAbout)),
		key => toCamelCase(key.slice(prefixICareAbout.length))
	)
}
