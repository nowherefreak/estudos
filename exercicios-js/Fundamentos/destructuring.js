// novo recurso 

const pessoa = {
    nome: 'thiago',
    idade: 420,
    endereco: {
        logradouro: 'rua gay',
        numero: 698
    }
}

const { nome, idade } =  pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)