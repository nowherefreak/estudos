const a = {name: 'teste'}
console.log(a)
const b = a
b.name = 'opa'
console.log(a)
// ok o 'a' e o 'b' possuem o mesmo endereço então se você muda o 'b' você tambem muda o 'a'

let valor // não inicializada
console.log(valor)
// já que você não atribuiu nada para "valor", o resultado fica undefined
valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString)// erro!!
// você não acessar nada de uma variavel null/undefined
const produto = {}
console.log(produto.preco)  // undefined pq você não definiu o preço
console.log(produto)

produto.preco = undefined // evite usar undefined, você pode atribuir 0
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço, pode dizer que não está disponivel
console.log(!!produto.preco)
console.log(produto)
