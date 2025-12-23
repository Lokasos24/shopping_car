import { renderUsers } from "../components/renderUi.js";
import { saveUser } from "./storage/saveStorage.js";

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
        login: false
    })
}

export function loginSession(userState){
    const name = document.getElementById('login_username_input')
    const password = document.getElementById('login_password_input')

    console.log(stateUsers)

    userState.findIndex(user => {
        user.name.toLowerCase() === name.value.toLowerCase() &&
        user.password.toLowerCase() === password.value.toLowerCase()
    })
}