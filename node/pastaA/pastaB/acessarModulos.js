// Importando o moduloA
const moduloA = require('../../moduloA')
console.log(moduloA.ola);

const c = require('./pastaC/index')
// pastaC
console.log(c.ola2)

// importando um modulo interno do node.
const http = require('http')
// Cria um server que recebe uma requisicao e uma resposta.
http.createServer((req, res) => {
  res.write('Bom dia!')
  res.end() // Finaliza a requisicao
}).listen(8080) // escutar na porta 8080