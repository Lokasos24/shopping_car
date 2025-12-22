import { renderUIProducts, renderUIUsers } from "./components/renderUi.js"
import { register } from "./dom/events.js"
import fakeStore from "./services/apiProducts.js"

async function main(){
    const data = await fakeStore()
    renderUIUsers()
    renderUIProducts(data)
    register()
}

main()