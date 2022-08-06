console.log(this === global); //falso porque o this aponta para o module.exports.
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
  console.log('Dentro de uma função...');
  console.log(this === exports); // this não aponta para exports dentro de uma função.
  console.log(this === module.exports); // this não aponta para exports dentro de uma função.
  console.log(this === global); // dentro de uma função aponta para global

  this.perigo = '...' // global
}

logThis()