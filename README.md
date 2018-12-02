# eslint-config-pretty-airbnb

Airbnb style configuration for Eslint, prettier support for react and non-react projects.

## Installation

First, install the package using the following command:

```sh
npm i -D eslint-config-pretty-airbnb
```

## Airbnb + Prettier default configuration

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": "pretty-airbnb/no-react"
}
```

or for short:

```json
{
  "extends": "pretty-airbnb"
}
```

this configuration that i use when working on non `react` project. this setup is mix of
`airbnb-base` rules and `plugin:prettier/recommended`.

## Airbnb + Prettier for react projects

If you want to use it when developing an react project then use this config instead:

```json
{
  "extends": "pretty-airbnb/yes-react"
}
```

Then in the vscode settings copy and paste the following settings:

```json
"editor.formatOnSave": true,
"[javascript]": {
    "editor.formatOnSave": false
},
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true,
"prettier.disableLanguages": [
    "js"
],
"files.autoSave": "onFocusChange",
```
