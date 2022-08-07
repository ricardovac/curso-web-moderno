function falarDepoisDe(segundos, frase) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'Que legal!')
  // then pega a callback resolvida do promise.
  .then((frase) => frase.concat('?!?'))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e))
