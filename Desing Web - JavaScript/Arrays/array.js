console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Thiago')
console.log(aprovados)

aprovados = ['Bia','Carlos' ,'Thiago']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
aprovados.sort() // organizar o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[1] = 'Bia'
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') // (seleciona o começo, quantos arrays voce quer apagar, os arrays que voce quer adicionar)
console.log(aprovados)
