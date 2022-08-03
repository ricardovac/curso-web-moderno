class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

// Tem como prototipo a outra classe Avo.
class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super('Silva')
  }
}

const filho = new Filho()
console.log(filho)
