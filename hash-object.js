const md5Hex = require(`md5-hex`)

module.exports = object => md5Hex(
	Object.entries(object)
		.sort(([ keyA ], [ keyB ]) => keyA.localeCompare(keyB))
		.map(([ keyA, valueA ]) => keyA + valueA)
)
