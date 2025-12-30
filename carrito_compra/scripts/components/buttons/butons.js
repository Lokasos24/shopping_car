export function sumButton(){
    const sumButonDom = document.createElement('button')
    sumButonDom.id = `sum`
    sumButonDom.className = `sum-rest`
    sumButonDom.textContent = `+`

    return sumButonDom
}

export function restButton(){
    const restButonDom = document.createElement('button')
    restButonDom.id = `rest`
    restButonDom.className = `sum-rest`
    restButonDom.textContent = `-`

    return restButonDom
}

export function deleteProductCar(name, id){
    const deleteButton = document.createElement('button')
    deleteButton.dataset.id = `${id}deleteElement`
    deleteButton.className = `delete-button`
    deleteButton.textContent = `${name}`

    return deleteButton
}