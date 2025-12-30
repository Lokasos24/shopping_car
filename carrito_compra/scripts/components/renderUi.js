import { createUsers } from "./users/createUsers.js";
import { createProducts } from "./products/createProducts.js";
import { guess } from "./users/createGuess.js";
import { createCar, emptyCar } from "./products/shoppingCar.js";
import { cuantityCard } from "./carProducts/cuantityCard/cuantity.js";
import { showTotal } from "./total/total.js";

export function renderUsers(session, user){
    const divPather = document.getElementById('login')

    if(!session){
        guess(divPather)
    }else{
        createUsers(user, divPather)
    }
}

export function renderProducts(data){
    const divPather = document.getElementById('products')
    createProducts(data, divPather)
}

export function renderShoppingCar(products, userName, data){
    const divPather = document.getElementById('products')
    divPather.replaceChildren()
    if(products.length <= 0){
        emptyCar(divPather, userName)
    }else{
        createCar(products, userName, divPather)
        showTotal(data)
    }
}

export function renderCuantity(product){
    cuantityCard(product.cuantity, product.id)
}