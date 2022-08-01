const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado');
  }
  else {
    console.log('Reprovado');
  }
};

imprimirResultado(10)
imprimirResultado(4)

// Acima é uma funcão constante, porém tem a mesma funcionalidade.

// function imprimirResultado(nota) {
//   if (nota >= 7) {
//     console.log('Aprovado');
//   }
//   else {
//     console.log('Reprovado');
//   }
// };