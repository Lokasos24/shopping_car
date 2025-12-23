

export function createUsers(divLogin, stateUsers){
    const register = divLogin.appendChild(document.createElement('button'))
    const login = divLogin.appendChild(document.createElement('button'))

    register.id = 'modal_user'
    register.textContent = `Registrate`
    
    login.id = `modal_login_button`
    login.textContent = `Iniciar sesion`
}