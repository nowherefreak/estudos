// par nome/valor
const saudacao = 'Opa'  // contexto léxico(1), o local fixo o "valor" que foi definido

function exec() {
    const saudacao = 'Bola azuis' // contexto léxico 2, não gera conflito
    return saudacao
}
// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Thiago',
    idade: 18,
    peso: 58,
    endereco: {
        logradouro: 'lugar nenhum',
        numero: 69
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)