const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o ultimo elemento do array.
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no ultimo indice.
console.log(pilotos)

pilotos.shift() // Remove o primeiro indice.
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no primeiro indice.
console.log(pilotos)

// Splice pode adicionar e remover elementos.
pilotos.splice(2, 0, 'Bottas', 'Massa') // o segundo numero não foi declarado então não será removido nada.
console.log(pilotos)

pilotos.splice(3, 1) // remove o 'Massa'.
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // novo array, começando pelo indice 2.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)  // o indice 4 não vai entrar.
console.log(algunsPilotos2);