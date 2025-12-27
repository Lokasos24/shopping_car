import { addToCar } from "../services/usersState.js";

export function addProductToCar(state, data){
    if(!state.session) return
    document.addEventListener('click', event => {
        const clickTarget = event.target.dataset.id

        if(clickTarget !== 'addToCar') return

        const pather = event.target.closest('div')

        const product = data.find(products => {
            return products.id === Number(pather.dataset.id)
        })

        addToCar(product)
    })
}