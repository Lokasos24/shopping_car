export function createProducts(data, divPadre){
    divPadre.replaceChildren()
    data.forEach((products, i) => {
        const contentDiv = divPadre.appendChild(document.createElement('div'))
        contentDiv.dataset.id = products.id
        contentDiv.className = 'products_api'
        
        const nameSpan = contentDiv.appendChild(document.createElement('span'))
        nameSpan.textContent = `${products.title}`

        const images = contentDiv.appendChild(document.createElement('img'))
        images.src = `${products.image}`

        const price = contentDiv.appendChild(document.createElement('span'))
        price.textContent = `${products.price} USD`

        const button = contentDiv.appendChild(document.createElement('button'))
        button.className = `add_car`
        button.textContent = `Agregar al carrito`

    });
}