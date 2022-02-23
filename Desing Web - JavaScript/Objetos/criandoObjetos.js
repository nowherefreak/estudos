// forma literal
const obj1 = {}
console.log(obj1)

// object js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome // this torna o atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto) // esses valores estão escondidos
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2988.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funçao factory( função que fabrica objetos)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)