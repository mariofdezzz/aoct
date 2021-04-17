# Getting Started

## Quick Start

The fastest way to start solving AoC problems is just by installing this package.

```sh
npm i aoct
```

::: danger
For the moment, online data is not availible. So you will need to have puzzles data locally. See how [here](local-data/).
:::

To simplify your run command, add following to your `package.json`:

```json
"scripts": {
  "start": "npx aoc-tool start"
},
```

Select your day and you're ready to go! 🎉

```sh
npm start day1
```

## TypeScript

If you are interested in solving problems with TypeScript, you will need _aoct_ and _ts-node_.

```sh
npm i aoct ts-node
```

Create `aoct.json` specifying TypeScript compiler. See more [here](config/).

```json
{
  "compiler": "ts"
}
```
