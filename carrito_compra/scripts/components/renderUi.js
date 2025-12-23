import { createUsers } from "./users/createUsers.js";
import { createProducts } from "./products/createProducts.js";

export function renderUsers(stateUsers){
    const divPadre = document.getElementById('login')
    createUsers(divPadre, stateUsers)
}

export function renderProducts(data){
    const divPadre = document.getElementById('products')
    createProducts(data, divPadre)
}