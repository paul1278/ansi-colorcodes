# ANSI-Colorcodes collection
To simply add a collection of ANSI color-codes use this simple package.
It does not contain any special logic, only an object with the colors.
Because of that, it comes with zero dependencies and is *very* small.

## Usage
```js
const colors = require("ansi-colorcodes");
console.log(`${colors.bg.black + colors.mods.bold}This text is ${colors.fg.green}green${colors.reset}!`);
```

## Structure
* `colors.fg` - contains foreground colors
* `colors.bg` - contains background colors
* `colors.mods` - contains formatting things like underline etc.