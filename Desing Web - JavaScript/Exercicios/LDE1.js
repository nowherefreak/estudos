/* 1) Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final. */

complemento = nome => 'Olá, ' + nome + '!'
console.log(complemento('Maria'))

// 2) Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias 

const converterIdadeEmAnosParaDias = anos => anos * 365
console.log(converterIdadeEmAnosParaDias(18))

/*  3) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
    funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
    X ", em que X é o quanto o funcionário ganhou no mês. */

const calcularSalario = function(horas, dinheiroPorHora) {
        salario = horas * dinheiroPorHora
        console.log(`Salário igual a R$${salario}`)
}
calcularSalario(40, 25)

/*  4) Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */
