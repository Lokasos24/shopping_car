export function saveUser(state){
    localStorage.setItem(`user`, JSON.stringify(state))
    const savedUsers = JSON.parse(localStorage.getItem(`user`) || [])
}