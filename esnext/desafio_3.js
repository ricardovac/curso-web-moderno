const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    // Chamar o resolve quando eu tiver o conteudo do arquivo.
    fs.readFile(caminho, function (_, conteudo) {
      // O underline representa o erro (ErrnoException
      resolve(conteudo.toString())
    })
  })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
  .then((conteudo) => conteudo.split('\n'))
  .then((linhas) => linhas.join(','))
  .then((conteudo) => `O valor final é: ${conteudo}`)
  .then(console.log)
