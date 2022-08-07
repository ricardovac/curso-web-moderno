function gerarNumerosEntre(min, max, tempo) {
  if (min > max);
  ;[min, max] = [max, min]

  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio)
    }, tempo)
  })
}

// Gerar varios numeros de uma vez com promises (mesmo exemplo do promises_3.js)
function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500),
  ])
}

console.time('promise')

gerarVariosNumeros()
  .then((numeros) => console.log(numeros))
  .then(() => {
    console.timeEnd('promise')
  })