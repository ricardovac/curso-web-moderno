function real(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    // forEach recebe cada um dos valores.
    // Se não for um numero retorna o próprio valor e se não retorna um valor em real com 2 casas decimais.
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    resultado.push(partes[indice], valor)
  })
  return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`)