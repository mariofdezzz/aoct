# Data

This tool will allow you to parse problem's input data into an array of strings automatically.

Unfortunately, input data is different for each account. This makes it more difficult to load this data for you. There are two methods:

- **Read data locally**: If you create a folder named `data` by following the folder structure used by ***aoct***, data will be availible automatically into your code.
- **Fetch data from server**: The most comfortable idea, but it requires a cookie given to you. This options also allows you to save data locally making load time instantaneous.

## Folder Structure

When saving _input_ into your code, a folder named `data` at the top level will be required by ***aoct***. Also, you could save some _test_ data to play arround if the problem is been hard.

To sum up, you could place _input_ or _test_ files, with _.txt_ extensions as it follows:

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
├── aoct.json
└── src
```

## Fetch Data

This method will allow you to forget about copying by hand every input puzzle by fetching it for you. To do it, your _session_ cookie is required.

### How to retrieve your cookie

:::warning
This explanation assumes you're using Chrome. But it is no really hard to guess how to do it on other browsers.
:::

To retrieve your _session_, follow the steps:

1. Open [adventofcode.com](https://adventofcode.com).
2. Log in.
3. Open _Chrome Devtools_ (F12).
4. Go to _Application_ tab.
5. On the sidebar, under _Storage_ section, expand _Cookies_ and click on `https://adventofcode.com`.
6. Now you're seeing 3 cookies, one of them must be ***session***. Copy it's value!
7. Open your `aoct.json` and save your cookie with key [_"session"_](/config/#session).


```json
{
    "session": "YOUR PRIVATE KEY"
}
```

### Usefull information

Now you have your _session_ set up, you're problably done. But here it is some usefull information you'll like to know.

***What happens now if I write a file under data folder?***

Well, **data** is exclusively reserved for ***aoct***. That's why any file found under this folder will be read and loaded even if _session_ is specified. If any file is found and data cannot be fetched you won't receive any data, although your code will be executed anyways.

Otherwise, this behavior affects only _input_ because _test_ cannot be fetched, only read.

***Fetch data takes so long***

Retrieve data from the server takes a while. This could be enhanced by saving retrieved data if you specify it inside [configuration](/config/#saveFetched).
