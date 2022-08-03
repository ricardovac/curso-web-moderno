// this aponta o contexto que a funcao foi escrita.
const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao);
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // confli


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()