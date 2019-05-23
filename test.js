const { test } = require(`zora`)
const parseFromArgObject = require(`./parse-from-arg-object.js`)
const hashObject = require(`./hash-object.js`)

test(`parseFromArgObject`, t => {
	const output = parseFromArgObject({
		'wat-is-up': 5,
		'wat-ok': 7,
		'some-other-thing': 9,
		wat: 0,
	}, `wat`)

	t.deepEqual(output, {
		isUp: 5,
		ok: 7,
	})
})

test(`hashObject`, t => {
	const firstHash = hashObject({
		one: 1,
		two: `two`,
	})

	t.equal(firstHash, hashObject({
		two: `two`,
		one: 1,
	}))

	t.notEqual(firstHash, hashObject({
		one: 1,
	}))
})
