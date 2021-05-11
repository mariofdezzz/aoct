# Config

You can set up some settings creating `aoct.json` file.

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

