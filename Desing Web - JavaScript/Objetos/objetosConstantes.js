// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
//pessoa = {nome : 'Ana'}

Object.freeze(pessoa) // o nome vai permanecer pedro