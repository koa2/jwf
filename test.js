import test from 'ava'
import fs from 'fs'
import jwf from '.'

test('test sub.json', t => {
  const json = jwf('sub.json')

  t.is(json.config.b.a, 1)
  t.is(json.config.b.b, 2)
})

test('test ./sub.json', t => {
  const json = jwf('./sub.json')

  t.is(json.config.b.a, 1)
  t.is(json.config.b.b, 2)
})

test('test package.json', t => {
  const json = jwf('./package.json')
  
  t.is(json.name, 'jwf')
  t.is(typeof json.scripts, 'object')
})

