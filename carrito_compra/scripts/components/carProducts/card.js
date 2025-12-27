export function cardToShoppingCard(name, img, price, cuantity){
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
    divCuantity.className = `cuantity-product-car`

    const buttonCuantitySum = divCuantity.appendChild(document.createElement('button'))
    buttonCuantitySum.id = `sum`
    buttonCuantitySum.className = `sum-rest`
    buttonCuantitySum.textContent = `+`

    const cardCuantity = divCuantity.appendChild(document.createElement('span'))
    cardCuantity.className = `cuantity-main-product-car`
    cardCuantity.textContent = `${cuantity}`

    const buttonCuantityRest = divCuantity.appendChild(document.createElement('button'))
    buttonCuantityRest.id = `rest`
    buttonCuantityRest.className = `sum-rest`
    buttonCuantityRest.textContent = `-`

    return divCar
}