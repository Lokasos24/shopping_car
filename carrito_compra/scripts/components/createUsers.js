

export function createUsers(divLogin, stateUsers){
    const newDiv = divLogin.appendChild(document.createElement('div'))
    const register = newDiv.appendChild(document.createElement('button'))

    register.id = 'modal_user'

    if(!stateUsers){
        register.href = ``
        register.textContent = `Registrate`
    }

    if(stateUsers){
        register.textContent = `${stateUsers}`
    }

}