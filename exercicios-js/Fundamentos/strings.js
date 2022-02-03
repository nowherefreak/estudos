const escola = "Cod3r"
// Cod3r, C é o indice 0, "o" é o indice 1, "d" é o indice 2 e por assim vai
console.log(escola.charAt(4))
console.log(escola.charAt(5))
/* charAt(x) é para selecionar uma letra espeficia do string selecionado
   quando não tem uma letra selecionada, não vai aparecer nenhuma letra */
console.log(escola.charCodeAt(3))
// vai aparecer o unicode de tal numero, no caso 3 é 51
console.log(escola.indexOf('3'))
// vai aparecer em que indice a letra vai aparecer na palavra
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
// substring é para selecionar uma parte do texto
console.log('Escola '.concat(escola).concat("!"))
// concat é para adicinar palavras textos e etc
console.log('Escola' + escola + "!")
// você tambem pode usar o "+"
console.log(escola.replace(3, 'e'))
// replace é para substituir letras/numeros com outra coisa
console.log('Ana,Maria,Pedro'.split(','))
// split é para separar os strings