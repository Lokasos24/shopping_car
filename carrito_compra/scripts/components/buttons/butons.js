export function sumButton(id){
    const sumButonDom = document.createElement('button')
    sumButonDom.className = `sum-rest`
    sumButonDom.textContent = `+`

    return sumButonDom
}

export function restButton(id){
    const restButonDom = document.createElement('button')
    restButonDom.className = `sum-rest`
    restButonDom.textContent = `-`

    return restButonDom
}