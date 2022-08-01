// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2, 3, 10, 5, 45, 14) // Vai pegar só os dois primeiros numeros e ignorar o resto.
console.log(' ');

// Funcao com retorno
function soma(a, b = 1) {
    return a + b 
}

console.log(soma(2, 3)); // 5.
console.log(soma(2)) // caso n for definido o segundo valor, ele será 1. 