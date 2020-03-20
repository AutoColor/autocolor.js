# autocolor.js

> Automatically colors your console output!

## Installation

```console
npm i autocolor.js
```

## Import

### Via require
```javascript
const ac = require("autocolor.js")
```

### Via module import
```javascript
import * as ac from "autocolor.js"
```

## Usage

Make sure that you have imported the module! 

You can use the module the same way as `console.log()` 

| no color                                | automatically colored              |
| --------------------------------------- | ---------------------------------- |
| console.log("info: insert text here")   | ac.log("info: insert text here")   |
| console.debug("info: insert text here") | ac.debug("info: insert text here") |
| console.warn("info: insert text here")  | ac.warn("info: insert text here")  |
| console.error("info: insert text here") | ac.error("info: insert text here") |

## Contribute

### Adding keywords

To add color to a specific keyword or pattern, you'll have to create a new file in `src/keywords/keywords`.

> If you want, you can duplicate an already existing keyword. 

Make the code changes you desire and open a pull request! :rocket:

**Important:** You also have to add your newly created `Keyword` to the array (`registeredKeywords`) in `src/keyword/keywords.ts`.
