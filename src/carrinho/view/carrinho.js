const getCarrinho = () =>JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []

const setCarrinho = dadosCarrinho => localStorage.setItem('@sonhosGelados:carrinho', JSON.stringify(dadosCarrinho))

const real = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

const addCart = document.querySelector(".addCart")

const mostrarCarrinho = () => {

    const carrinho = getCarrinho()

}