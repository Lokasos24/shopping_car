import { renderProducts, renderUsers } from "./components/renderUi.js"
import { loginModal, registerModal } from "./dom/events.js"
import fakeStore from "./services/apiProducts.js"

const invitado = 'invitado'

async function main(){
    renderUsers(invitado)
    registerModal()
    loginModal()
    const data = await fakeStore()
    renderProducts(data)
}

main()