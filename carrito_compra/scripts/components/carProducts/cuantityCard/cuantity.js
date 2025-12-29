import { sumButton, restButton } from "../../buttons/butons.js"

export function cuantityCard (cuantity, id){
    const divAll = document.createElement('div')
    divAll.dataset.id = `${id}`
    divAll.className = `cuantity-product-car`
    
    divAll.appendChild(sumButton())

    const cardCuantity = divAll.appendChild(document.createElement('span'))
    cardCuantity.id = `cuantityProduct`
    cardCuantity.className = `cuantity-main-product-car`
    cardCuantity.textContent = `${cuantity}`

    divAll.appendChild(restButton())

    return divAll
}