# jwf

> jwf = json with file require

extention for require('./package.json') with file

## Install

```
$ npm i -S jwf
```

## Usages

```
var jwf = require('jwf')

var json = jwf('./sub.json')

console.log(json)
```

input sub.json content

```
{
  "name": "jwf",
  "version": "1.0.0",
  "description": "json with file require",
  "config":{
    "b":  "./b.js",
    "c": {
      "b":  "./b.js"
    }
  }
}
```

b.js

```
module.exports = {
  a:1,
  b:2
}
```

output result.json

```
{
    "name": "jwf",
    "version": "1.0.0",
    "description": "json with file require",
    "config": {
        "b": {
            "a": 1,
            "b": 2
        },
        "c": {
            "b": {
                "a": 1,
                "b": 2
            }
        }
    }
}
```
