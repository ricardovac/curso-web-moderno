function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve()
    }, tempo)
  })
}

// esperarPor(2000)
//   .then(() => console.log('Executando promise 1...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 2...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 3...'))

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000)
  })
}

// async function retornarValorRapido() {
//   return 20
// }

// Mesmo exemplo comentado acima com função assíncrona.
async function executar() {
  // Por trás do async/await tem que ter uma promise
  let valor = await retornarValor()
  // let valor = await retornarValorRapido() <- retorna o 20 sem o tempo de espera.

  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}...`)

  return valor + 3
}

// Preciso estar dentro de uma função async para executar o await.
async function executarDeVerdade() {
  const valor = await executar()
  console.log(valor)
}

// executar().then(console.log)
executarDeVerdade()