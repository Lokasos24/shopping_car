import { calculateTotal } from "../../services/shoppingCarService/findUser.js"

export function showTotal(data){
    const totalToShow = calculateTotal(data)
    const totalPather = document.getElementById('total')
    totalPather.replaceChildren()

    const totalChild = totalPather.appendChild(document.createElement('span'))
    totalChild.id = `totalSpan`
    totalChild.className = `total`
    totalChild.textContent = totalToShow

    const buy = totalPather.appendChild(document.createElement('button'))
    buy.id = `buyAll`
    buy.className = `buy`
    buy.textContent = `Comprar`
}