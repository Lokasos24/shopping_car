import { renderProducts, renderUsers } from "./components/renderUi.js"
import { loginModal, registerModal } from "./dom/events.js"
import fakeStore from "./services/apiProducts.js"

async function main(){
    renderUsers()
    registerModal()
    loginModal()
    const data = await fakeStore()
    renderProducts(data)
}

main()