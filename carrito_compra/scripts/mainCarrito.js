import { loadState } from "./services/storage/saveStorage.js"
import { findUsers } from "./services/shoppingCarService/findUser.js"

const data = loadState()

function mainCar(){
    findUsers(data)
}

mainCar()