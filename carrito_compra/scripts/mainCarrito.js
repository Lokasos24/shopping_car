import { loadState } from "./services/storage/saveStorage.js"
import { findUsers } from "./services/shoppingCarService/findUser.js"
import { buyAllProducts, deleteProduct, sumRestCuantity } from "./dom/eventCar.js"
import { showTotal } from "./components/total/total.js"

const data = loadState()

function mainCar(){
    sumRestCuantity(data)
    deleteProduct()
    findUsers(data)
    showTotal(data)
    buyAllProducts()
}

mainCar()