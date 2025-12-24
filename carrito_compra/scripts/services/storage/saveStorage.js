export function saveUser(state){
    localStorage.setItem(`login`, JSON.stringify(state))
    const savedUsers = JSON.parse(localStorage.getItem(`login`) || '{users:[], session: null}')

    return savedUsers
}

export function loadState(){
    const storedUsers = localStorage.getItem(`login`)
    return storedUsers ? JSON.parse(storedUsers) : {users: [], session: null}
}