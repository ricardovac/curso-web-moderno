const produtos = [
  {
    nome: 'Notebook',
    preco: 2499,
    fragil: true,
  },
  {
    nome: 'Ipad Pro',
    preco: 4199,
    fragil: true,
  },
  {
    nome: 'Copo de Vidro',
    preco: 12.49,
    fragil: true,
  },
  {
    nome: 'Copo de Plastico',
    preco: 18.44,
    fragil: false,
  },
]

Array.prototype.filter2 = function (callback) {
  const newArray = [] // Os elementos filtrados do filter representam um novo array.
  for (let i = 0; i < this.length; i++) {
    // Passa o elemento, indice e o proprio array.
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const caro = (produto) => produto.preco >= 500

const fragil = (produto) => produto.fragil === true

const resultado = produtos.filter2(caro).filter2(fragil)
console.log(resultado)
