import { renderProducts } from "./components/renderUi.js"
import { addProductToCar } from "./dom/eventCar.js"
import { openModalRegister } from "./dom/eventModal.js"
import { endSesion, loginModal } from "./dom/events.js"
import fakeStore from "./services/apiProducts.js"
import { loadState } from "./services/storage/saveStorage.js"
import { loadSession } from "./services/usersState.js"

const state = loadState()

async function main(){
    loadSession(state)
    openModalRegister()
    loginModal(state)
    endSesion()
    const data = await fakeStore()
    renderProducts(data)
    addProductToCar(state, data)
}

main()