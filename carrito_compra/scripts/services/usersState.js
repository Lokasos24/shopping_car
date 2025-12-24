import { renderUsers } from "../components/renderUi.js";
import { saveUser, loadState } from "./storage/saveStorage.js";

const stateUsers = loadState()

export function registerUser(registerAlert){
    const modalInputName = document.getElementById('register_user_name_input')
    const modalInputPass = document.getElementById('register_user_pass_input')
    const modalInputMail = document.getElementById('register_user_mail_input')

    const verifyUser = stateUsers.users.find(user => user.mail === modalInputMail.value)

    if(verifyUser){
        registerAlert.textContent = `Ya hay un usuario registrado con ese mail`
        return
    }

    stateUsers.users.push({
        id: crypto.randomUUID(),
        name: modalInputName.value,
        password: modalInputPass.value,
        mail: modalInputMail.value,
        products: [],
    })

    saveUser(stateUsers)
}

export function loginSession(loginAlert){
    const name = document.getElementById('login_username_input')
    const password = document.getElementById('login_password_input')

    const verifyUser = stateUsers.users.find(user => {
        return user.name.toLowerCase() == name.value.toLowerCase() &&
        user.password.toLowerCase() == password.value.toLowerCase()
    })

    if(!verifyUser){
        return loginAlert.textContent = `Nombre o contraseña incorrectos`
    }

    stateUsers.session = verifyUser.id
    const userSesion = stateUsers.users.find(user => user.id === stateUsers.session)

    saveUser(stateUsers)
    renderUsers(userSesion.session, userSesion)
}

export function closeSesion(){
    stateUsers.session = null

    saveUser(stateUsers)
    renderUsers(stateUsers.session)
}

export function loadSession(state){
    if(state.session !== null){
        const findUser = state.users.find(user => user.id === state.session)

        return renderUsers(state.session, findUser)
    }

    renderUsers(state.session)
}