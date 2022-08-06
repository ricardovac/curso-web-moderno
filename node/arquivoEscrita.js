const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15
}

// WriteFile escreve um arquivo
// fs.writeFile(file, data, options, callback)
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  // Irá mostrar a mensagem de erro ou a mensagem normal.
  console.log(err || 'Arquivo salvo!');
})