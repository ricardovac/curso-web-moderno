const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array com apenas os preços

// Converte um texto para objeto.
const paraObjeto = (json) => JSON.parse(json)
// Pega apenas o preço.
const apenasPreco = (produto) => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
