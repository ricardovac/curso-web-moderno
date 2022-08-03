console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// criando um novo metodo ao prototipo da string.
String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

console.log('Reverta'.reverse())

Array.prototype.first = function () {
  return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() {
  return 'BlaBlaBla'
}

console.log('Reverta'.reverse());
