import { renderShoppingCar, renderUsers } from "../components/renderUi.js";
import { saveUser, loadState } from "./storage/saveStorage.js";

const stateUsers = loadState()

export function registerUser(data){
    const verifyUser = stateUsers.users.find(user => user.mail === data.mail)

    if(verifyUser){
        data.errors.textContent = `Ya hay un usuario registrado con ese mail`
        return
    }

    stateUsers.users.push({
        id: crypto.randomUUID(),
        name: data.name,
        password: data.pass,
        mail: data.mail,
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

export function addToCar(product){
    if(!stateUsers.session) return

    const findUserIndex = stateUsers.users.findIndex(user => user.id === stateUsers.session)

    if(findUserIndex === -1) return

    const findElement = stateUsers.users[findUserIndex].products.some(value => value.id === product.id)

    if(findElement){
        const findIndexProduct = stateUsers.users[findUserIndex].products.findIndex(value => value.id === product.id)
        stateUsers.users[findUserIndex].products[findIndexProduct].cuantity += 1
        saveUser(stateUsers)
    }else{
        
        stateUsers.users[findUserIndex].products.push({
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.image,
            cuantity: 1,
        })

        saveUser(stateUsers)
    }
}

export function sumCuantity(idProduct){
    if(!stateUsers.session) return
    
    const findUser = stateUsers.users.find(user => user.id === stateUsers.session)
    if(!findUser) return
    const findProduct = findUser.products.find(prod => prod.id === idProduct)
    if(!findProduct) return
    findProduct.cuantity += 1

    saveUser(stateUsers)
    return findProduct
}

export function restCuantity(idProduct){
    if(!stateUsers.session) return
    
    const findUser = stateUsers.users.find(user => user.id === stateUsers.session)
    if(!findUser) return
    const findProduct = findUser.products.find(prod => prod.id === idProduct)
    if(!findProduct) return
    findProduct.cuantity -= 1

    saveUser(stateUsers)
    return findProduct
}