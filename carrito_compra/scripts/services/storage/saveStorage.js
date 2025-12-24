export function saveUser(state){
    localStorage.setItem(`login`, JSON.stringify(state))
    const savedUsers = JSON.parse(localStorage.getItem(`login`) || [])

    return savedUsers
}

export function loadState(){
    const storedUsers = localStorage.getItem(`login`)
    return storedUsers ? JSON.parse(storedUsers) : []
}