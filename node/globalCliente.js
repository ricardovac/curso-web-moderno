require('./global')

console.log(MinhaApp.saudacao());

// Imutável por causa do Object.freeze no global.js.
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome);