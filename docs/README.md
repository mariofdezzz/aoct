# Getting Started

## Quick Start

The fastest way to start solving AoC problems is just by installing this package.

```sh
npm i aoct
```

To simplify your run command, add following to your `package.json`:

```json
"scripts": {
  "start": "npx aoct start"
},
```

Select your day and you're ready to go! 🎉

```sh
npm start day1
```

## TypeScript

If you are interested in solving problems with TypeScript, you will need to specify it via config. Create `aoct.json` specifying TypeScript compiler. See more [here](config/).

```json
{
  "compiler": "ts"
}
```
