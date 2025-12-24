import { renderUsers } from "../components/renderUi.js";
import { saveUser, loadState } from "./storage/saveStorage.js";

const stateUsers = loadState()

export function registerUser(registerAlert){
    const modalInputName = document.getElementById('register_user_name_input')
    const modalInputPass = document.getElementById('register_user_pass_input')
    const modalInputMail = document.getElementById('register_user_mail_input')

    const verifyUser = stateUsers.find(user => user.mail === modalInputMail.value)

    if(verifyUser){
        registerAlert.textContent = `Ya hay un usuario registrado con ese mail`
        return
    }

    stateUsers.push({
        id: crypto.randomUUID(),
        name: modalInputName.value,
        password: modalInputPass.value,
        mail: modalInputMail.value,
        login: false,
        products: [],
    })

    saveUser(stateUsers)
}

export function loginSession(loginAlert){
    const name = document.getElementById('login_username_input')
    const password = document.getElementById('login_password_input')

    const verifyUser = stateUsers.find(user => {
        return user.name.toLowerCase() == name.value.toLowerCase() &&
        user.password.toLowerCase() == password.value.toLowerCase()
    })

    if(!verifyUser){
        return loginAlert.textContent = `Nombre o contraseña incorrectos`
    }

    const index = stateUsers.findIndex(user => user.id === verifyUser.id)

    stateUsers[index].login = true

    saveUser(stateUsers)
    renderUsers(stateUsers, index)
}

export function closeSesion(target){
    const findId = target.previousElementSibling
    const findUser = stateUsers.find(user => user.id === findId.dataset.id)

    if(!findUser) return
    
    findUser.login = false
    saveUser(stateUsers)
    renderUsers(stateUsers)
}