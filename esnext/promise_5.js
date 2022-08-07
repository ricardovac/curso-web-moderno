function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) { // Exemplo: 1 > 0.5 = resolve 
      reject('Ocorreu um erro!')
    } else {
      resolve(valor)
    }
  })
}
// Caso o valor ser entre 0 e 1, será gerado um erro.
funcionarOuNao('Testando...', 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  // Tratando o erro com catch.
  .catch((err) => console.log(`Erro: ${err}`)) // Posso encadear um catch também.