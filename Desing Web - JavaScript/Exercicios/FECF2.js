/* 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado
 */

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`09) Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}
function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}
classificaAluno(43)

/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 ou false.
*/
function solucao(numero) {
        return numero % 3 == 0;      
    }
console.log(`10) ${!!solucao(6)}`)

/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
 */
function anoBissexto(anos) {
    if(anos % 100 == 0) {
        console.log(`${anos} não é um ano bissexto`)
    } else if(anos % 400 == 0) {
        console.log(`${anos} é um ano bissexto`)
    } else if(anos % 4 == 0) {
        console.log(`${anos} é um ano bissexto`)
    } else (
        console.log(`11) ${anos} não é um ano bissexto`)
    )
}
anoBissexto(10)

// 12) Faça um algoritmo que calcule o fatorial de um número
function calcularFatorial (fatorial) {
    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
     
    return resultado;
}   
console.log('12) ' + calcularFatorial(3))

/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
const diasDaSemana = function (dia) {
    switch (dia) {
        case 1:    case 7:
            console.log('13) Esse dia faz parte do fim de semana')
            break
        case 2:     case 3:    case 4:    case 5:    case 6:
            console.log('Esse dia é um dia útil')
            break
        default:
            console.log('Esse dia é um dia inválido')
    }
}
diasDaSemana(1)

/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
 */
const inventario = function(fruta) {
    switch(fruta) {
        case 'kiwi':
            console.log('14) Estamos com escassez de kiwis')
            break
        case 'maça':
            console.log('14) Não vendemos esta fruta aqui')
            break
        case 'melancia':
            console.log('14) Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('14) Hoube um erro no console')
    }
}
inventario('kiwi'); inventario('melancia'); inventario('maça')

/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
 */

const comprarCarro = function(modelo) {
    switch(modelo) {
        case 'hatch': 
            return 'Compra efetuada com sucesso'
        case 'sedan': case 'motocicletas': case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Nós não trabalhamos com esse tipo de carro'
    }
}
console.log('15) ' + comprarCarro('hatch'))
console.log('15) ' + comprarCarro('sedan'))
console.log('15) ' + comprarCarro('ferrari'))

/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

const calculadora = function(x, y, op) {
    switch(op) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return console.log('Operação invalida')
                                
    }
}
console.log('16) ' + calculadora(2, 3, '*'))

