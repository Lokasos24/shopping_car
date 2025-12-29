import { cuantityCard } from "./cuantityCard/cuantity.js"

export function cardToShoppingCard(id, name, img, price, cuantity){
    const divCar = document.createElement('div')
    divCar.id = `content-pather-cards`
    divCar.className = `content-cards`

    const cardName = divCar.appendChild(document.createElement('span'))
    cardName.className = `name-product-car`
    cardName.textContent = `${name}`

    const cardImg = divCar.appendChild(document.createElement('img'))
    cardImg.className = `img-product-car`
    cardImg.src = `${img}`

    const cardPrice = divCar.appendChild(document.createElement('span'))
    cardPrice.className = `price-product-car`
    cardPrice.textContent = `${price} USD`

    const divCuantity = divCar.appendChild(document.createElement('div'))
    divCuantity.id = `cuantityPather`
    divCuantity.replaceChildren()
    divCuantity.appendChild(cuantityCard(cuantity, id))

    return divCar
}