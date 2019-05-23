A CLI for sending checks with [Lob](https://lob.com/).

## Install
```sh
npm i lob-check-cli -g
```

## Usage

Expects a `LOB_API_KEY` environment variable to be set.

All arguments prefixed with `adr` are used to create an [address](https://lob.com/docs/node#addresses_create) object.

If there is an existing address with the same properties, that address will be used instead of creating a new address.

All arguments prefixed with `check` are used to create a [check](https://lob.com/docs/node#checks_create).

You'll need to create the `from` address and `bank_account` manually in the [Lob Dashboard](https://dashboard.lob.com/) and pass those ids to the CLI.

## Example

```
lob-check --adr-name="Accelerando Coffee House" --adr-address-line1="7023 Cass Street" --adr-address-city="Omaha" --adr-address-state="NE" --adr-address-zip="68132" --check-from="adr_2aa6e965740a9613" --check-bank-account="bank_647a2fce6ff7148" --check-amount=12.34
```

# License

[WTFPL](https://wtfpl2.com)
