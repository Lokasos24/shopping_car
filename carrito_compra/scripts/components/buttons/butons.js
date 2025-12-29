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