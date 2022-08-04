const nums = [1, 2, 3, 4, 5]

// Mapeando uma função.
let resultado = nums.map(function (e) {
  return e * 2
})

console.log(resultado)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // toFixed transforma para duas casas decimais, e o replace substitui o ponto para virgula

// mapeando os numeros à funções arrows, que transforma para dinheiro.
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);