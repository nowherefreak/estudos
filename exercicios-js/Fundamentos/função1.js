// função sem retorno
// função é um bloco de codigo nomeado
function imprimirSoma(a, b)  {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) //NaN Not a Number
imprimirSoma(2, 3, 4, 5, 6, 7) // simplesmente ignora os ultimos numeros
imprimirSoma() // sem resultado

// função com retorno   
function soma(a, b = 1) {
    return a + b
}
// quando b não for definido ele adquire o valor de 1
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())