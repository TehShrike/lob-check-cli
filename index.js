#!/usr/bin/env node

const mri = require(`mri`)
const lobCheck = require(`lob-check`)

const parseFromArgObject = require(`./parse-from-arg-object.js`)

async function main(apiKey, cliArguments) {
	const address = parseFromArgObject(cliArguments, `adr`)
	const check = parseFromArgObject(cliArguments, `check`)

	const createdCheck = await lobCheck({ apiKey, address, check })
	console.log(`Check created!`)
	console.log(createdCheck)
}


// ACTION GO TIME
const inputArgs = mri(process.argv.slice(2))
const apiKey = process.env.LOB_API_KEY

main(apiKey, inputArgs).catch(err => {
	console.error(err.message || err)
	process.exit(1)
})
