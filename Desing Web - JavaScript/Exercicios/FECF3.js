/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
A === 10%
B === 15%
C === 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const promocao = function (plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            console.log('O plano é inválido')
    }
}
console.log('17) ' + promocao('C', 1000))

/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.'
*/
const contador = function (numero) {
    switch (numero) {
        case 0:
            return console.log('Zero')
        case 1:
            return console.log('Um')
        case 2:
            return console.log('Dois')
        case 3:
            return console.log('18) Tres')
        case 4:
            return console.log('Quatro')
        case 5:
            return console.log('Cinco')
        case 6:
            return console.log('Seis')
        case 7:
            return console.log('Sete')
        case 8:
            return console.log('Oito')
        case 9:
            return console.log('Nove')
        case 10:
            return console.log('Dez')
        default:
            console.log('Número fora do intervalo')

    }
}
contador(3)

/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto    Preço
100 === Cachorro Quente ====== R$ 3,00
200 === Hambúrguer Simples === R$ 4,00
300 === Bandeclay==== ======== R$ 5,50
400 === Bauru ================ R$ 7,50
500 === Refrigerante ========= R$ 3,50
600 === Suco ================= R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */
const pedido = function (codigo, produto, preco) {
    switch (codigo) {
        case 100:
            produto = 'Cachorro Quente', preco = 'R$ ' + 3.00
            return console.log(produto, preco)
        case 200:
            produto = 'Hambúrguer Simples', preco = 'R$ ' + 4.00
            return console.log(produto, preco)
        case 300:
            produto = '19) Bandeclay', preco = 'R$ ' + 5.50
            return console.log(produto, preco)
        case 400:
            produto = 'Bauru', preco = 'R$ ' + 7.50
            return console.log(produto, preco)
        case 500:
            produto = 'Refrigerante', preco = 'R$ ' + 3.50
            return console.log(produto, preco)
        case 600:
            produto = 'Suco', preco = 'R$ ' + 2.80
            return console.log(produto, preco)
        default:
            return console.log('Nós não vendemos esse produto aqui')
    }
}
pedido(300)

/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }
    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }
    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }
    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }
    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log('20) ' + sacarDinheiro(153));

/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */
const valorBase = 100
function valorPlano(idade)  {
        if(idade < 10) {
            return valorPlano = 80 + valorBase
        }else if(10 <= idade < 30 ) {
            return valorPlano = 50 + valorBase
        }else if(30 <= idade < 60) {
            return valorPlano = 95 + valorBase
        }else if(idade >= 60) {
            return valorPlano = 130 + valorBase
        }    
}
console.log(`O valor a ser pago é R$ ${valorPlano(15)}`)