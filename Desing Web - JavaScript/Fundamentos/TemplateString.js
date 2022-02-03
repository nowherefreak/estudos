const nome = 'Yago'
const concatenacao = 'Olá ' + nome + '!'
// `${...}` é o template string
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)
// expressoes...
console.log(`1 + 1 = ${1 + 1}`)
// você coloca o `${...}` para interpretar o ...

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)