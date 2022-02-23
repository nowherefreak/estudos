function criarProdutos(nome, preco) {
    return {
    nome,
    preco,
    desconto: preco * 0.1
    }
}

console.log(criarProdutos('Notebook', 1432.23))
