import { loginSession, registerUser, closeSesion } from "../services/usersState.js"

export function registerModal(state){
    if(state.session !== null && state.session !== undefined) return

    const modalRegisterBtn = document.getElementById('modal_user')
    const closeRegisterModal = document.getElementById('close_register')
    const modalRegister = document.getElementById('modal_register')
    const register_user = document.getElementById('register')

    const registerAlert = document.getElementById('register_alert');
    const registerInputName = document.getElementById('register_user_name_input')
    const registerInputPass = document.getElementById('register_user_pass_input')
    const registerInputMail = document.getElementById('register_user_mail_input')

    closeRegisterModal.addEventListener('click', event => {
        event.preventDefault()
        modalRegister.style.display = 'none'
    })

    modalRegisterBtn.addEventListener('click', event => {
        event.preventDefault()
        modalRegister.style.display = 'block'
    })
    
    register_user.addEventListener('click', event => {
        if(registerInputName.value.trim() === '' || 
            registerInputPass.value.trim() === '' ||
            registerInputMail.value.trim() === ''
        ){
            registerAlert.textContent = `No puede haber espacios vacios`
            return
        }

        registerUser(registerAlert)
    })
}

export function loginModal(state){
    if(state.session !== null && state.session !== undefined) return

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

        loginSession(loginAlert)
    })
}

export function endSesion(state){
    const closeBtn = document.getElementById('close_sesion')

    if(!closeBtn) return

    closeBtn.addEventListener('click', event => {

        if(!closeBtn) return

        if(event.target.id === closeBtn.id){
            location.reload()
            closeSesion()
        }
    })
}