var fs = require('fs')
var path = require('path')
var debug = require('debug')('jwf')


module.exports = function (file) {
  var obj = require(file)
  
  return parse (obj) ;
}

function parse (obj) {
  var result = {}
  for(var i in obj){
    debug('result[i] ' + i  + ' - ' + obj[i] )
    if (typeof obj[i] == 'object') {
      // console.log(obj[i])
      // console.log(parse (obj[i]))
      result[i] = parse (obj[i])
      // console.log(result)
      // break
    }else if (fs.existsSync(obj[i]) === true) {
      debug('existsSync ' + i  + ' - ' + obj[i] )
      result[i] = require(path.join(__dirname, obj[i]))
      // console.log(result[i])
    } else {
      result[i] = obj[i]
    }
  }
  
  return result
}
