import { loginSession, registerUser } from "../services/usersState.js"


export function registerModal(){
    const modalRegisterBtn = document.getElementById('modal_user')
    const closeRegisterModal = document.getElementById('close_register')
    const modal_register = document.getElementById('modal_register')
    const register_user = document.getElementById('register')

    closeRegisterModal.addEventListener('click', event => {
        event.preventDefault()
        modal_register.style.display = 'none'
    })

    modalRegisterBtn.addEventListener('click', event => {
        event.preventDefault()
        modal_register.style.display = 'block'
    })
    
    register_user.addEventListener('click', event => {
        registerUser()
    })
}

export function loginModal(){
    const modalLoginBtn = document.getElementById('modal_login_button')
    const closeModalLogin = document.getElementById('close_login')
    const modalLogin= document.getElementById('modal_login')
    const loginUser = document.getElementById('login_sesion')

    const loginAlert = document.getElementById('login_alert')

    closeModalLogin.addEventListener('click', event => {
        event.preventDefault()
        loginAlert.textContent = ``
        modalLogin.style.display = 'none'
    })

    modalLoginBtn.addEventListener('click', event => {
        event.preventDefault()
        modalLogin.style.display = 'block'
    })

    loginUser.addEventListener('click', event => {
        event.preventDefault()
        const name = document.getElementById('login_username_input')
        const password = document.getElementById('login_password_input')

        if(name.value.trim() === ''){
            loginAlert.appendChild(document.createElement('span')).textContent = `Nombre y contraseña incorrectos o vacíos`
            return
        }

        if(password.value.trim() === ''){
            loginAlert.appendChild(document.createElement('span')).textContent = `Nombre y contraseña incorrectos o vacíos`
            return
        }

        loginSession()
    })
}