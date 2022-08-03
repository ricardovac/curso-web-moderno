// Factory simples

function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

function criarPessoa2() {
  const obj = {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
  return obj
}

console.log(criarPessoa());