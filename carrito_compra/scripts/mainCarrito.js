import { loadState } from "./services/storage/saveStorage.js"
import { findUsers } from "./services/shoppingCarService/findUser.js"
import { deleteProduct, sumRestCuantity } from "./dom/eventCar.js"

const data = loadState()

function mainCar(){
    sumRestCuantity()
    deleteProduct()
    findUsers(data)
}

mainCar()