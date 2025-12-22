export function register(){
    const modalbtn = document.getElementById('modal_user')
    const closeModal = document.getElementById('close')
    const modal = document.getElementById('modal')

    closeModal.addEventListener('click', event => {
        modal.style.display = 'none'
    })

    modalbtn.addEventListener('click', event => {
        modal.style.display = 'block'
    })
}