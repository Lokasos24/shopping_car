export function createUsers(stateUsers, index, divPadre){
    if(stateUsers === 'invitado'){
        const register = divPadre.appendChild(document.createElement('button'))
        const login = divPadre.appendChild(document.createElement('button'))
        register.id = 'modal_user'
        register.textContent = `Registrate`
        
        login.id = `modal_login_button`
        login.textContent = `Iniciar sesion`
        return
    }

    if(stateUsers[index].login === true){
        const name = divPadre.appendChild(document.createElement('span'))
        name.dataset.id = stateUsers[index]
        name.textContent = `${stateUsers[index].name}`
        return
    }
}