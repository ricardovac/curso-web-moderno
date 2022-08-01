var numero = 1
{ // como estao em escopos diferentes e usando let no escopo de dentro, tera valores diferentes.
    let numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);