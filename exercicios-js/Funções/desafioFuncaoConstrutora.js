const criarPessoa = nome => {
        return{
    falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p1 = criarPessoa('João')
p1.falar()