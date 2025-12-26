export function cardToShoppingCard(name, img, price){
    const divCar = document.createElement('div')

    const cardName = divCar.appendChild(document.createElement('span'))
    cardName.textContent = `${name}`

    const cardImg = divCar.appendChild(document.createElement('img'))
    cardImg.src = `${img}`

    const cardPrice = divCar.appendChild(document.createElement('span'))
    cardPrice.textContent = `${price}`

    return divCar
}