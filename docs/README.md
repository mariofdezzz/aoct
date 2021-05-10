# Introduction

## Getting Started

:::tip
If you want to go straight to the point, you can just use the [template repo](https://github.com/mariofdezzz/aoc-node-starter). When you're done, you will need to check out [how to put input data](data/).
:::

To get started you need to install ***aoct***.

```sh
npm i aoct
```

It's recommended simplify your run command, by adding the following script to your `package.json`:

```json
"scripts": {
  "start": "npx aoct start"
},
```

Select your day and you're ready to go! 🎉

```sh
npm start day1
```

Now, you'll need to add input problems data. [Learn how](data/).

## TypeScript

If you are interested in solving problems with TypeScript, you have to specify it via config. Create `aoct.json` specifying TypeScript compiler. See more about config file [here](config/).

```json
{
  "compiler": "ts"
}
```
