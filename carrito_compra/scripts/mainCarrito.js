import { loadState } from "./services/storage/saveStorage.js"
import { findUsers } from "./services/shoppingCarService/findUser.js"
import { sumRestCuantity } from "./dom/eventCar.js"

const data = loadState()

function mainCar(){
    findUsers(data)
    sumRestCuantity()
}

mainCar()