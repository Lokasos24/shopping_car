import { renderProducts, renderUsers } from "./components/renderUi.js"
import { endSesion, loginModal, registerModal } from "./dom/events.js"
import fakeStore from "./services/apiProducts.js"
import { loadState } from "./services/storage/saveStorage.js"

const state = loadState()

async function main(){
    renderUsers(state)
    registerModal(state)
    loginModal(state)
    endSesion(state)
    const data = await fakeStore()
    renderProducts(data)
}

main()