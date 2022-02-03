const notas = [7.7, 6.5, 5.2, 9.4, 10.0, 3.6]

// Sem callback
 let notasBaixas1 = []
 for(let i in notas) {
     if (notas[i] < 7) {
         notasBaixas1.push(notas[i])
     }
 }
 console.log(notasBaixas1)

 // Com callback
const notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)