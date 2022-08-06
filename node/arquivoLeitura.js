// Filesystem
const fs = require('fs')

// __dirname pega o diretório atual.
const caminho = __dirname + '/arquivo.json'

// lendo um arquivo de forma sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// lendo um arquivo de forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo) // transformando a string em um objeto.
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{
  console.log('Contéudo da pasta...');
  console.log(arquivos);
})