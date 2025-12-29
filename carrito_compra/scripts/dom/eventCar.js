import { cuantityCard } from "../components/carProducts/cuantityCard/cuantity.js";
import { renderCuantity } from "../components/renderUi.js";
import { addToCar, sumCuantity, restCuantity } from "../services/usersState.js";

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

export function sumRestCuantity(){
    document.addEventListener('click', event => {
        const target = event.target
        const targetPather = target.closest('div')

        if(target.id === 'sum'){
            const brother = target.nextElementSibling
            const productSum = sumCuantity(Number(targetPather.dataset.id))
            brother.textContent = productSum.cuantity
        }else if(target.id === 'rest'){
            const brother = target.previousElementSibling
            const productRest = restCuantity(Number(targetPather.dataset.id))
            brother.textContent = productRest.cuantity
        }
    })
}