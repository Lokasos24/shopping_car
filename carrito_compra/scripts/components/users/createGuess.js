export function guess(divPadre){

    const register = divPadre.appendChild(document.createElement('button'))
    const login = divPadre.appendChild(document.createElement('button'))
    register.id = 'modal_user'
    register.className = `modal-user`
    register.textContent = `Registrate`

    login.id = `modal_login_button`
    login.className = `modal-login-button`
    login.textContent = `Iniciar sesion`

}