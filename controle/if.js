function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('Aprovado com');
  }
}

soBoaNoticia(8.1) 
soBoaNoticia(6.1) 

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log('É verdade...' + valor)
  }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

// Unico valor verdadeiro.
seForVerdadeEuFalo(1)