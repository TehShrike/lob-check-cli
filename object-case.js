const mapKeys = require(`./map-keys.js`)
const toSnakeCase = require(`just-snake-case`)
const toCamelCase = require(`just-camel-case`)

module.exports = {
	makeObjectSnakeCase: object => mapKeys(object, toSnakeCase),
	makeObjectCamelCase: object => mapKeys(object, toCamelCase),
}
