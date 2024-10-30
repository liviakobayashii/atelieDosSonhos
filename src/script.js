const menu = document.querySelector("#menu")

//verifica se tem algum "item" registrado
const checkProduct = items => {
    if(items === 0) {
        menu.innerHTML = "<h2>Nenhum produto encontrado!<h2>"
    }else{
        menu.innerHTML = items
    }
}

//adiciona os itens no array de produtos
const addArray = product => {
    let price = product.price.toFixed(2).toString().replace(".",",")

    items+=
    `<div class="card">
        <img src="./assets/img/${product.img}" alt="Imagem de um(a) ${product.name}">
        <div class="description">
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p onclick ="addCarrinho()" class="addCart">Adicionar ao carrinho</p>
                </div>
    </div>
    
    `
}

const showProducts = type => {

    if (type === 0) {
        products.forEach(product => {
            if (product.lastPrice === 0)
                addArray(product)
        })
    } else {
        products.forEach(product => {
            if (product.type === type && product.lastPrice === 0)
                addArray(product)
        })
    }
}

checkProduct(items)