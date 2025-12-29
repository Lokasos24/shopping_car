import { sumButton, restButton } from "../buttons/butons.js"

export function cardToShoppingCard(id, name, img, price, cuantity){
    const divCar = document.createElement('div')
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
    divCuantity.id = `cuantity`
    divCuantity.className = `cuantity-product-car`

    divCuantity.appendChild(sumButton(id))

    const cardCuantity = divCuantity.appendChild(document.createElement('span'))
    cardCuantity.className = `cuantity-main-product-car`
    cardCuantity.textContent = `${cuantity}`

    divCuantity.appendChild(restButton(id))

    return divCar
}