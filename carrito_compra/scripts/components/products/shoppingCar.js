import { cardToShoppingCard } from "../carProducts/card.js"

export function emptyCar(divPather, userName){
    const login = document.getElementById('login')

    const name = login.appendChild(document.createElement('span'))
    name.className = `user-name`
    name.textContent = `${userName}`

    const closeSesion = login.appendChild(document.createElement('button'))
    closeSesion.id = `closeSession`
    closeSesion.className = `close-session`
    closeSesion.textContent = `Cerrar sesión`

    const emtpyProducts = divPather.appendChild(document.createElement('h1'))
    emtpyProducts.className = `empty-title`
    emtpyProducts.textContent = `No hay productos en el carrito`
}

export function createCar(products, userName, divPather){
    const login = document.getElementById('login')

    const name = login.appendChild(document.createElement('span'))
    name.className = `user-name`
    name.textContent = `${userName}`

    const closeSesion = login.appendChild(document.createElement('button'))
    closeSesion.id = `closeSesion`
    closeSesion.className = `close-sesion`
    closeSesion.textContent = `Cerrar sesión`

    products.forEach(value => {
        divPather.appendChild(cardToShoppingCard(
            value.title,
            value.image,
            value.price
        ))
    })

}