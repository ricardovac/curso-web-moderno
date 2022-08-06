const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const apenasChina = (f) => f.pais === 'China'
const apenasMulheres = (f) => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

// get optem uma informação do servidor.
axios.get(url).then((response) => {
  const funcionarios = response.data
  // console.log(funcionarios)

  const func = funcionarios
    .filter(apenasChina)
    .filter(apenasMulheres)
    .reduce(menorSalario)
  console.log(func)
})
