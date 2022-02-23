// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1,
    tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Thiago', idade: 19}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Ronaldo'
delete pessoa.nome
pessoa.aniversario = '19/12/2002'
console.log(pessoa)

// Object.freeze = selado + valores constantes