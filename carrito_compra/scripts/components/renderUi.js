import { createUsers } from "./users/createUsers.js";
import { createProducts } from "./products/createProducts.js";
import { guess } from "./users/createGuess.js";

export function renderUsers(session, user){
    const divPadre = document.getElementById('login')

    if(!session){
        guess(divPadre)
    }else{
        createUsers(user, divPadre)
    }
}

export function renderProducts(data){
    const divPadre = document.getElementById('products')
    createProducts(data, divPadre)
}