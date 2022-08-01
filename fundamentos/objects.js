// json é textual
// objeto é de forma literal

// par de chaves representa um objeto.
const prod1 = {}
prod1.nome = 'Celular Ultra Mega' /// nome será o identificador.
prod1.preco = '444.2'
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço.

console.log(prod1)

// jeito mais usado para criar objetos.
const prod2 = {
    nome: 'Camisas Polo',
    preco: 34.56
}

console.log(prod2)
