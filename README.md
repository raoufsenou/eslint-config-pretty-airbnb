# eslint-config-senou-airbnb

It is the airbnb style configuration for eslint, with bonus for prettier support.

## Installation

First, install the package using the following command:

```sh
npm i -D eslint-config-senou-airbnb
```

## Airbnb configuration

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": "senou-airbnb"
}
```

## Airbnb + Prettier

If you want to activate the prettier support than use this instead:

```json
{
  "extends": "senou-airbnb/prettier"
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

## Use legacy config (No react)

If you want to use this configuration for non react project than, use this instead:

```json
{
  "extends": ["senou-airbnb/legacy"]
}
```
