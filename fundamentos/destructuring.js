const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Tire de dentro do objeto o nome e idade, do objeto pessoa.
const  { nome, idade } = pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep);