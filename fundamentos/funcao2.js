// armazenando uma funcao em uma variavel

const imprimirSoma = function(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)

// armazenando uma funcao arrow em uma variavel
// arrow function é sem a palavra function e a setinha
const soma = (a, b) => {
    return a + b
}

console.log(soma(2 ,3));

// retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(2 ,3))