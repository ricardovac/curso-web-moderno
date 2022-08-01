// par nome/Valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
} 

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lograduro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(exec());