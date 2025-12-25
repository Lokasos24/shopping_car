import { modalRegister } from "../components/modal/modal.js";
import { registerUser } from "../services/usersState.js";

const modalClicks = modalRegister()

export function openModalRegister(){
    const openButton = document.getElementById('modal_user')
    if(!openButton) return
    openButton.addEventListener('click', () => modalClicks.show())

    document.body.appendChild(modalClicks)

    const closeButton = document.getElementById('closeRegister')
    if(!closeButton) return
    closeButton.addEventListener('click', () => modalClicks.close())

    const registerButton = document.getElementById('register')
    if(!registerButton) return
    registerButton.addEventListener('click', (event) => {
        event.preventDefault()
        const data = modalClicks.validateAll()
        if(!data) return

        registerUser(data)
        location.reload()
    })
}