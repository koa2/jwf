var fs = require('fs')
var jwf = require('.')

// var json = jwf('./a.json')
var json = jwf('./sub.json')

console.log(json)


var content =  JSON.stringify(json, null, 4); // Indented 4 spaces

fs.writeFile('./result.json', content, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});