function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i]; // pega cada elemento dado e soma.
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.2, 2.2, 3.3));

console.log(soma(1.2, 2.2, 'Teste'));
console.log(soma('a', 'b', 'c'));