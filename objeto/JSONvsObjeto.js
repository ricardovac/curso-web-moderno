const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c
  },
}

console.log(JSON.stringify(obj)) // json é um formato textual, não é mostrado funções.

// console.log(JSON.parse('{a:1, b:2, c:3}'))

// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
// um json é limitado a aspas duplas. 
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))
