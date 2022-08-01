let contador = 1;

// exemplo com while
while (contador <= 10) {
  console.log(`contador = ${contador}`);
  contador++;
}

// exemplo com for
for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i = 0; i < notas.length; i++) { // o length vai pegar a quantidade de notas (enquanto 0 for menor que 5:)
  console.log(`nota = ${notas[i]}`);
}
