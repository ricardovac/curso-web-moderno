// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Erro!!!
// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // torna o objeto constante.
pessoa.nome = 'Mario' // ignora a atribuição por causa do freeze.
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
