// Object.preventExtensions

const produto =  Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
// posso excluir atributos, mas nao posso adicionar novos.
delete produto.tag
console.log(produto);

// Object.seal 
// Consigo editar o objeto, porém, não consigo adicionar ou remove-los.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selada:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

// Object.freeze = selado + valores constantes