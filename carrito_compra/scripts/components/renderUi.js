import { createUsers } from "./users/createUsers.js";
import { createProducts } from "./products/createProducts.js";

export function renderUsers(stateUsers, index){
    const divPadre = document.getElementById('login')
    createUsers(stateUsers, index, divPadre)
}

export function renderProducts(data){
    const divPadre = document.getElementById('products')
    createProducts(data, divPadre)
}