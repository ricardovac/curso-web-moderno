Array.prototype.map2 = function(callback) {
  const newArray = []
  // do indice 0 até o final do array.
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array com apenas os preços

// Converte um texto para objeto.
const paraObjeto = json => JSON.parse(json)
// Pega apenas o preço.
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado);