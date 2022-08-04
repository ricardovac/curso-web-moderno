// arrays são objetos
// porem sao organizados por indexes começando de 0.
console.log(typeof Array, typeof new Array(), typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Adicionando um novo elemento.
aprovados.push('Abia') // Tambem adicionando um novo elemento.
console.log(aprovados.length)

aprovados[9] = 'Rafael' // Adiciona um elemento ao indice 9.
console.log(aprovados.length) // 10 elementos.
console.log(aprovados[8] === undefined) // output: true.

console.log(aprovados)
aprovados.sort() // Torna ordenada.
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // remove indices de acordo com a especificacao dada. (remove o carlos e a bia.)
console.log(aprovados)
aprovados.splice(1, 1, 'Elemento 1', 'Elemento 2')
console.log(aprovados)
