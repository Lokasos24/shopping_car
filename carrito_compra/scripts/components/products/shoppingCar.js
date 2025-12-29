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

    const home = login.appendChild(document.createElement('a'))
    home.href = `../index.html`
    home.textContent = `Inicio`
    home.className = `go-home`

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
    closeSesion.className = `close-session`
    closeSesion.textContent = `Cerrar sesión`

    const home = login.appendChild(document.createElement('a'))
    home.href = `../index.html`
    home.textContent = `Inicio`
    home.className = `go-home`

    products.forEach(value => {
        divPather.appendChild(cardToShoppingCard(
            value.id,
            value.name,
            value.image,
            value.price,
            value.cuantity,
        ))
    })

}