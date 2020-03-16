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
