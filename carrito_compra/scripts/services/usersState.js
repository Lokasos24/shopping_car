import { renderUsers } from "../components/renderUi.js";

const stateUsers = []

export function loginState(){
    // saveUser(stateUsers)
    renderUsers(stateUsers)
}

export function registerUser(){
    const modalInputName = document.getElementById('register_user_name_input')
    const modalInputPass = document.getElementById('register_user_pass_input')
    const modalInputMail = document.getElementById('register_user_mail_input')

    stateUsers.push({
        id: crypto.randomUUID(),
        name: modalInputName.value,
        password: modalInputPass.value,
        mail: modalInputMail.value,
        login: false,
        products: [],
    })
}

export function loginSession(loginAlert){
    const name = document.getElementById('login_username_input')
    const password = document.getElementById('login_password_input')
    const verifyUser = stateUsers.find(user => {
        return user.name.toLowerCase() == name.value.toLowerCase() &&
        user.password.toLowerCase() == password.value.toLowerCase()
    })

    if(verifyUser === undefined){
        loginAlert.textContent = `Nombre o contraseña incorrectos`
    }

    const index = stateUsers.findIndex(user => {
        return user.name.toLowerCase() == name.value.toLowerCase() &&
        user.password.toLowerCase() == password.value.toLowerCase()
    })

    renderUsers(stateUsers, index)
}