const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Guilherme'))

app.use((req, res, next) => {
  console.log('Antes...');
  next()
})

app.get('/clientes/relatorio', (req, res) => {
  //localhost:3000/clientes/relatorio?completo=true&ano=2018
  res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.completo}`)
})

// : é algo que pode mudar
app.get('/clientes/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo', (req, res) => {
  // let corpo = ''
  // req.on('data', function(parte) {
  //   corpo += parte
  // })

  // req.on('end', function() {
  //   res.send(corpo)
  // })
  res.send(req.body)
})

app.get('/opa', (req, res, next) => {
  console.log('Durante...');
  res.json({
    data: [
      { id: 34, name: 'Bia', position: '2' },
      { id: 39, name: 'Carlos', position: '3' }
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  })

  next()
  // res.json({
  //   name: 'Ipad 32GB',
  //   price: 1899.00,
  //   discount: 0.21
  // })
  // res.send('Estou <b>bem</b>!')
})

app.use((req, res) => {
  console.log('Depois...');
})

app.listen(3000, () => {
  console.log('Backend executando...')
})