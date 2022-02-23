// coleção dinamica entre chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89900,
    proprietario: {
        nome: 'Thiago',
        idade: 19,
        endereço: {
            rua: 'Lugar nenhum',
            numero: 420
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 24
    }, {
        nome: 'Ana',
        idade: 45
    }], 
    calcularValorSeguro: function() {
        // ...
    }
}
carro.proprietario.endereço.numero = 1000

console.log(carro)
delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // erro pq ta indefinido