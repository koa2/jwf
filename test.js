var fs = require('fs')
var jwf = require('.')

import test from 'ava';

test('test sub.json', t => {
  // var json = jwf('./a.json')
  var json = jwf('sub.json')

  // console.log(json)
  
  t.is(json.config.b.a, 1)
  t.is(json.config.b.b, 2)
});

test('test ./sub.json', t => {
  // var json = jwf('./a.json')
  var json = jwf('./sub.json')

  // console.log(json)
  
  t.is(json.config.b.a, 1)
  t.is(json.config.b.b, 2)
});

test('test package.json', t => {
  // var json = jwf('./a.json')
  var json = jwf('./package.json')

  console.log(json)

  // console.log(json)
  
  t.is(json.name, 'jwf')
  t.is(typeof json.scripts, 'object')
});

