console.log(soma(3, 4))
//console.log(sub(3, 4))
//console.log(mult(3, 4))


// forma tradicional functions declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub =  function(x, y) {
    return x - y
}
console.log(sub(3, 4))

//named  function expression   pouco usada

const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))