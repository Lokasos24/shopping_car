export function createUsers(user, divPadre){
    divPadre.replaceChildren()

    const name = divPadre.appendChild(document.createElement('span'))
    name.dataset.id = user.id
    name.textContent = `${user.name}`

    const close = divPadre.appendChild(document.createElement('button'))
    close.id = `close_sesion`
    close.textContent = `Cerrar sesion`
    
}