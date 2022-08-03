class Pessoa {
  constructor(nome) {
    this.nome = nome; // o proprio obj
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('João');
p1.falar();

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const p2 = criarPessoa('Joao');
p2.falar();
