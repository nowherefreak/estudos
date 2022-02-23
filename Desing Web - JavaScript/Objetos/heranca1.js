// __proto__ é para objetos
// .prototype é para funções

const ferrari = {
    modelo:'F40',
    velMax: 340,
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// toda função tem o atributo prototype

function meuObjeto() {}
console.log(typeof Object)
console.log(typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)