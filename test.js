const { test } = require(`zora`)
const parseFromArgObject = require(`./parse-from-arg-object.js`)

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
