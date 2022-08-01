let valor // nao inicializada 
console.log(valor) 

valor = null // ausencia de valor, sempre usar null quando for zerar o valor de uma var.
console.log(valor)
// console.log(valor.toString())

const produto = {}
console.log(produto.preco) // o preço n esta definido

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar zerar o valor com undefined
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)