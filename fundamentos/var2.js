// mesmo sendo escopos diferentes a variavel sera reescrita.
var numero = 1 
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora =', numero);