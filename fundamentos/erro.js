function tratarErrorELacar(erro) {
  throw new Error('...')
}

function imprimirNomeCaps(obj) {
  try {
    console.log(obj.nome.toUpperCase() + '!!!');
  } catch (e) {
    tratarErrorELacar(e) // Caso dar erro no codigo
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Roberto' };
imprimirNomeCaps(obj);
