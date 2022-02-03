// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores
function calculos(x, y) {
    soma = x + y
    subtracao = x - y
    multiplicacao = x * y
    divisao = x / y
    console.log('01) ' + soma, subtracao, multiplicacao, divisao)
}
calculos(5, 5)

/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/
function Triangulo(lado1, lado2, lado3) {
    if(lado1 === lado2 && lado3) {
        console.log(`02) O triangulo é Equilátero, Lados = ${lado1}, ${lado2}, ${lado3}`)
    } else if (lado1 === lado2 != lado3) {
        console.log(`02) O triangulo é Isósceles, Lados = ${lado1}, ${lado2}, ${lado3}`)
    } else if (lado1 !== lado2 && lado3) {
        console.log(`02) O triangulo é Escaleno, Lados = ${lado1}, ${lado2}, ${lado3}`)
    }
}
Triangulo(2, 3, 3), Triangulo(4, 1, 2), Triangulo(6, 6, 6)

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function exponenciacao(base, expoente) {
    return console.log('03) ' + base ** expoente)
}
exponenciacao(3, 3)

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function retornarResto(dividendo, divisor) {
    let div = dividendo / divisor 
    resto1 = div - Math.floor(div)  
    resto2 = divisor * resto1
    return console.log(`04) Resultado = ${Math.floor(div)}, Resto = ${resto2}`)
}
retornarResto(384, 50)

/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
 seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
 importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
 um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
 que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function numeros(x, y) {
    papai = x + y
    return console.log(`05) ${papai.toFixed(2)}`)
}
numeros(34.22, 0.50)

/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 retornará o valor da aplicação sob o regime de juros compostos.
 */
function jurosSimples(capital, taxa, tempo){
    juros = capital * taxa * tempo
    montante = juros + capital
    return montante.toFixed(3)
}
function jurosComposto(capital, taxa, tempo) { 
    montante = capital * ( 1 + taxa) ** tempo
    return montante.toFixed(3)
}
console.log('06) ' +jurosSimples(200, 0.03, 10))
console.log('06) ' +jurosComposto(200, 0.03, 10))

/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”
*/
function baskara(a, b, c) {
    let delta = b * b - 4*a*c
    if(a == 0) {
        console.log('O valor de "a" deve ter o valor diferente de 0')
    } else if( delta >= 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
        const resultado = 'X1 =' + x1.toFixed(2) + ', X2 = ' + x2.toFixed(2)
            console.log(resultado)
    } else {
        console.log('07) Delta é negativo')
    }
}
baskara(3, -5, 12)

/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
 registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
 mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
 vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
 jogo. (Número do pior jogo)
 */
 let stringPontuacao = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

 const avaliaPontuacao = (stringPontuacao) => {
   let pontuacao = stringPontuacao.split(', ');
   let qtdQuebraRecordes = 0;
   let piorJogo = 1;
   let maiorPontuacao = pontuacao[0];
   let menorPontuacao = pontuacao[0];
 
   for (let i = 1; i < pontuacao.length; i++) {
     if (pontuacao[i] > maiorPontuacao) {
       maiorPontuacao = pontuacao[i];
       qtdQuebraRecordes++;
     } else if (pontuacao[i] < menorPontuacao) {
       menorPontuacao = pontuacao[i];
       piorJogo = i + 1;
     }
   }
   return [qtdQuebraRecordes, piorJogo]
 } 
 console.log('08) ' + avaliaPontuacao(stringPontuacao));
