let isAtivo = false
console.log(isAtivo)
// usar o let para alterar a variavel, sempre priorizar constantes

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
// "!" é para fazer uma negação, colocar "!!" pra saber se um valor é true ou false

// tipos verdadeiros, todos números são verdadeiros menos o "0"
console.log(!!3)
console.log(!!-1)
console.log(!!"deus")
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// tipos falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// pra finalizar
console.log(!!('' || null || 0 || 'epa'))
// /\ deu true porque teve um ema expressão true, "||" significa "ou"

let nome = ''
console.log(nome || 'Desconhecido')
// o primeiro nome deu false então com fui utilizado o desconhecido
nome = 'lucas'
console.log(nome || 'Desconhecido')
// mas agora que tem o 'lucas' entre as ''