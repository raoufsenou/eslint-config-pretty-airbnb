# eslint-config-senou-airbnb

It is the airbnb style configuration for eslint, with bonus for prettier support.

## Installation

First, install the package using the following command:

```sh
npm i -D eslint-config-senou-airbnb
```

## Airbnb + Prettier default configuration

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": "senou-airbnb/no-react"
}
```

or for short:

```json
{
  "extends": "senou-airbnb"
}
```

this configuration that i use when working on non `react` project. this setup is mix of
`airbnb-base` rules and `plugin:prettier/recommended`.

## Airbnb + Prettier for react projects

If you want to use it when developing an react project then use this config instead:

```json
{
  "extends": "senou-airbnb/yes-react"
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
