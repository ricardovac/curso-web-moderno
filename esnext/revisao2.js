// Arrow Function
const soma = (a, b) => a + b // arrow function são funções anônimas.
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // this está associado ao local onde a função foi escrita.
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// parametros default
function log(texto = 'Node') {
  console.log(texto)
}

log()
// O valor padrão ('Node') será escrito caso ele não ser atribudo a chamada.
log('Sou mais forte')

// operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach((n) => (total += n))
  return total
}

console.log(total(2, 3, 4, 5))
