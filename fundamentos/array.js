const valores = [4.4, 5.2, 5.3, 6.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 3.5
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retorna o ultimo elemento do array.
delete valores[0] // deleta o primeiro item.
console.log(valores)

console.log(typeof valores) // tipo object.