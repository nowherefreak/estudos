const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
// isInteger é para verificar se o numero é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
/* toFixed é para definir uma quantidade de casas decimais para o resultado
   aliás você acabou de fazer uma media :) */

console.log(media.toString(2))
/* toString é para fazer o numero voltar para o valor principal
   se você colocar toString(2) você vai ver o valor em números bínarios */

console.log(typeof media)
/* typeof é para verificar se a sua variavel é um numero, função e etc
   Number é uma função e number é uma classificação */