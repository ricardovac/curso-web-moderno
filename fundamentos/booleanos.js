let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // representa um valor verdadeiro
console.log(!isAtivo) // ! reverte

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' '))

let nome = '' 
console.log(nome || 'Desconhecido')

let nome2 = 'Lucas'
console.log(nome2 || '')

