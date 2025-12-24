import { createUsers } from "./users/createUsers.js";
import { createProducts } from "./products/createProducts.js";
import { guess } from "./users/createGuess.js";

export function renderUsers(userSesion){
    const divPadre = document.getElementById('login')
    if(userSesion){
        guess(divPadre)
    }else{
        createUsers(userSesion, divPadre)
    }
}

export function renderProducts(data){
    const divPadre = document.getElementById('products')
    createProducts(data, divPadre)
}