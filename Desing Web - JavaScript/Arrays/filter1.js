const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'iPad Pro', preco: 4299, fragil: true},
    {nome:'Copo de Vidro', preco: 12.99, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false}
]
const frageis = p => p.fragil
const caros = p => p.preco >= 500
console.log(produtos.filter(frageis).filter(caros))