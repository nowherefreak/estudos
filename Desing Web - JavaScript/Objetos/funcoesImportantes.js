const pessoa = {
    nome: 'Thiago',
    idade: 18,
    peso: 58
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => { //isso é bem pog
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se for false voce não pode ver no keys
    writable: false, 
    value: '26/09/2003'
})
pessoa.dataNascimento = '09/12/2201'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing
const dest = { a:1 }
const o1 = { b:2 }
const o2 = { c:3, a:5 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)