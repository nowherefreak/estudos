const pilotos = ['Vettel', 'Alonso ', 'Raikkonen', 'Massa']

pilotos.pop() // remove o ultimo elemento do array
pilotos.push('Vestapen') // adiciona um array no final

pilotos.shift() // remove o primeiro array
pilotos.unshift('Hamilton') // adiciona o array no começo
console.log(pilotos)

//splice pode adiciniar e remover elementos

pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array apartir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai do indice um até o indice 4(não mostra o indice 4)
console.log(algunsPilotos2)