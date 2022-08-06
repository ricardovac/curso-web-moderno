// Entrada de codigo no terminal, node entradaESaida -a.
const anonimo = process.argv.indexOf('-a') !== -1

// console.log(anonimo);
if (anonimo) {
  process.stdout.write('Fala Anônimo!\n')
  process.exit
} else {
  process.stdout.write('Informe o seu nome: ')
  // .on seria o teclado, quando digita alguma coisa e da enter.
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit()
  })
}