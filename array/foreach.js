const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// dentro do forEach tem o laço for, que percorre o array dos aprovados.
// o nome, o indice e o array são padrês parametros passados pelo forEach.
aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
})

console.log(' ');

// Arrow function.
aprovados.forEach(nome => console.log(nome))

console.log(' ');

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)