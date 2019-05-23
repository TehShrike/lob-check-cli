#!/usr/bin/env node

const mri = require(`mri`)
const lobFactory = require(`lob`)

const parseFromArgObject = require(`./parse-from-arg-object.js`)
const { makeObjectSnakeCase, makeObjectCamelCase } = require(`./object-case.js`)
const hashObject = require(`./hash-object.js`)

async function main(apiKey, cliArguments) {
	const lob = lobFactory(apiKey, {
		userAgent: `lob-check-cli`,
	})
	const inputAddress = parseFromArgObject(cliArguments, `adr`)
	const lobAddress = await getOrCreateAddress(lob, inputAddress)

	const inputCheck = parseFromArgObject(cliArguments, `check`)

	const createdCheck = await lob.checks.create(makeObjectSnakeCase(Object.assign({}, inputCheck, { to: lobAddress.id })))

	console.log(`Check created!`)
	console.log(createdCheck)
}

const getOrCreateAddress = async(lob, address) => {
	const hash = hashObject(address)
	const metadata = { hash }
	const response = await lob.addresses.list({ limit: 1, metadata })

	if (response.data.length === 1) {
		return makeObjectCamelCase(response.data[0])
	}

	return makeObjectCamelCase(
		await lob.addresses.create(
			makeObjectSnakeCase(Object.assign({}, address, { metadata }))
		)
	)
}






// ACTION GO TIME
const inputArgs = mri(process.argv.slice(2))
const apiKey = process.env.LOB_API_KEY

main(apiKey, inputArgs).catch(err => {
	console.error(err.message || err)
	process.exit(1)
})
