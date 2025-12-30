import { renderShoppingCar } from '../../components/renderUi.js'

export function findUsers(data){
    const idUserOn = data.session
    if(!idUserOn) return

    const findUser = data.users.find(user => user.id === idUserOn)
    if(!findUser) return

    const products = findUser.products
    const userName = findUser.name

    renderShoppingCar(products, userName, data)
    calculateTotal(data)
}

export function calculateTotal(data){
    const idUserOn = data.session
    if(!idUserOn) return

    const findUser = data.users.find(user => user.id === idUserOn)
    if(!findUser) return

    const total = findUser.products.reduce((acc, {price, cuantity}) => acc + price * cuantity, 0)

    return total.toFixed(2)
}