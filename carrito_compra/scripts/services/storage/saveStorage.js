export function saveUser(state){
    localStorage.setItem(`login`, JSON.stringify(state))
    const savedUsers = JSON.parse(localStorage.getItem(`login`) || [])

    return savedUsers
}