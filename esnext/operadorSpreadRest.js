// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.56 }
const clone = { ativo: true, ...funcionario } // ...funcionario está colocando todos os atributos de funcionario.

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal);