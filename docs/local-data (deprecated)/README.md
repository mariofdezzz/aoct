# Local Data

## Introduction

Under folder `data` you can set files to use each day. Two types of files can be placed: `input.txt` and `test.txt`.

```
.
├── data
│   └── 2021
│       ├── day1
│       │   ├── input.txt
│       │   └── test.txt
│       ├── day2
│       └── day3
│
├── aocconfig.json
└── src
```

## Config

To use local files, `local` is required. (See [Config](/config/#local))

```json
{
  "local": true
}
```

## How it works

By default, code will be executed using `input` file. Except if specified.

```js
run(part1, part2, false) // Execute with test.txt file
```

The file should contain the text given for the problem. On code you'll get an array of strings; one string per line.
