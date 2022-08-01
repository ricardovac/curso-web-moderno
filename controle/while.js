function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

// criando um laço
while (opcao != -1) { // opcao é diferente de -1
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`opcao escolhida foi ${opcao}.`);
}