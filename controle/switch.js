const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) { // floor intera para baixo.
    case 10: // quando está vazio cai para o debaixo.
    case 9:
      console.log('Quadro de Honra');
      break // Se não tiver o break vai executar todos os casos.
    case 8: case 7:
      console.log('Aprovado');
      break
    case 6: case 5: case 4:
      console.log('Recuperação');
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado');
    default:
      console.log('Nota i');
  }
};

imprimirResultado(10)
imprimirResultado(8.9) // vai arredondar para 8
imprimirResultado(6.55) 
imprimirResultado(2.3)
imprimirResultado(-1)