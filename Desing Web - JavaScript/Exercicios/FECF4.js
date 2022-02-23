/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function valorTotal(valor, mesPago) {
    juros = (valor * 1.05) - valor
    return valor + (mesPago * juros)
}
console.log(`22) O valor que deverá ser pago é ${valorTotal(1000, 2)}`)

/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

function lerNota(codigo, nota1, nota2, nota3) {
    if (nota1 > nota2 && nota3) {
        resultado = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30)
    } else if (nota2 > nota1 && nota3) {
        resultado = (nota2 * 0.40) + (nota1 * 0.30) + (nota3 * 0.30)
    } else if (nota3 > nota1 && nota3) {
        resultado = (nota3 * 0.40) + (nota1 * 0.30) + (nota2 * 0.30)
    }
    if(resultado >= 5) {
        console.log(`O ALUNO: ${codigo} FOI APROVADO!!, NOTAS:${nota1}, ${nota2}, ${nota3}. MEDIA:${resultado}`)
    } else {
        console.log(`O ALUNO: ${codigo} FOI REPROVADO!!, NOTAS:${nota1}, ${nota2}, ${nota3}. MEDIA:${resultado}`)
    }
}
lerNota('thiago', 1, 5, 5)

// 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

let opcao = 0
while (opcao != 10) {
    opcao = ++opcao
//    console.log(`Hello World!!`)
}
console.log('24) Fim.')

//25) Escrever um programa para exibir os números de 1 até 50 na tela.
let OtF = 0
while (OtF != 50) {
    OtF = ++OtF
    console.log(OtF)
}
console.log('25) fim!')

//26) Fazer um programa para encontrar todos os pares entre 1 e 100.

var cont =1 ;
while (cont<=100) {
    var resto = cont%2;
    if (resto == 0){
        console.log("Par " + cont);
    }
    cont = cont + 1;
}
console.log("26) FIM");

/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function altura(altura1, altura2, taxaCrescimento1, taxaCrescimento2) {
    if(altura1 < altura2) {
        return (altura2 - altura1) / taxaCrescimento1
    }else if(altura2 < altura1) {
        return (altura1 - altura2) / taxaCrescimento2
    }
}
console.log(`27) A criança irá ficar maior que a outra em ${altura(150, 180, 10, 10)} anos`)

// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.


