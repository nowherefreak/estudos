// arrays são feitos com []
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// (7.7) é o numero 0 e o (9.2) é o numero 3
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) 
// valores.length fala qual e o tamanho do array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
// é bom deixar o array homogeneo

console.log(valores.pop())
delete valores[0] 
// isso daqui é pra deletar os arrays

console.log(typeof valores)