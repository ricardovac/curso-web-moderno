let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

// Função arrow de uma unica linha.
dobro = a => 2 * a

console.log(dobro(Math.PI));

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola());