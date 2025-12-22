import { createUsers } from "./createUsers.js";
import { createProducts } from "./products/createProducts.js";

export function renderUIUsers(stateUsers){
    const divPadre = document.getElementById('login')
    createUsers(divPadre, stateUsers)
}

export function renderUIProducts(data){
    const divPadre = document.getElementById('products')
    createProducts(data, divPadre)
}