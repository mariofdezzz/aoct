# Config

You can set up some settings creating `aoct.json` file.

## $schema

- Value: `https://raw.githubusercontent.com/mariofdezzz/aoct/main/schema/schema.json`

By setting this value into config file, your IDE could autocomplete and show help for each option.

## year

- Type: `integer`
- Default: `Year on last 1st December`
- Minimum: `2015`

Defines which year are you currently solving.

## compiler

- Type: `string`
- Default: `"js"`
- Options: `"js"|"ts"`

Let's you choose between JavaScript or TypeScript for solving your problems. This will change the template generated on new days, but created ones will keep working despite this option.

## session

- Type: `string`

This cookie is given to you by loggin in into **adventofcode.com**. When specified, if it is correct, data will be fetched if you don't have input data saved locally.

## saveFetched

- Type: `boolean`
- Default: `false`

Save data locally after fetch.
