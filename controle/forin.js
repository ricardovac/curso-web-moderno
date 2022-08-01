const notas = [6.7, 7.4, 9.8, 8.1, 7.1];

for (let i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  nome: 'ana',
  sobrenome: 'silva',
  idade: 29,
  peso: 64,
};

// com o let eu não vou ter mais acesso a variavel fora do escopo.
for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}

console.log(atributo);
