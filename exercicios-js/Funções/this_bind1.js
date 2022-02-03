const pessoa = {
    saudação: 'Bom dia',
    falar() {
        console.log(this.saudação)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito

falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

