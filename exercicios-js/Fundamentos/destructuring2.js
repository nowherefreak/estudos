const [a] = [10]
console.log(a)

const [n1, n4, n5, n9, n2 = 0] = [10, 9, 8, 7, 6]
console.log(n1, n4, n5, n9, n2)

const[, [, nota]] = [[, 8, 8], [9,8,6,8]]
console.log(nota)