    
const addCarrinho = (id, nome, preco) => {
    const carrinho = getCarrinho()

    const existeSorveteComMesmoID = carrinho.some(item => item.id === id) // vao retornar true se tiver algum id igual ao item.id

    if (existeSorveteComMesmoID) {
        carrinho.forEach(item => {
            if (item.id === id) {
                item.qtd += 1
            }
        })
    } else {
        carrinho.push({ id, nome, qtd:1, preco, descricao:null }) //quando nome: nome
    }

    setCarrinho(carrinho)
}