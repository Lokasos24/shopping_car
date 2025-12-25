export function modalRegister(){
    const principalRegisterModal = document.createElement('div')
    principalRegisterModal.id = `modalRegister`
    principalRegisterModal.className = `modal-user-register`

    const contentModal = principalRegisterModal.appendChild(document.createElement('div'))
    contentModal.dataset.id = `modalContentRegister`
    contentModal.className = `modal-content-register`

    const formModal = contentModal.appendChild(document.createElement('form'))
    formModal.dataset.id = `registerContent`
    formModal.className = `register-content`

    const divNameUser = formModal.appendChild(document.createElement('div'))
    divNameUser.dataset.id = `nameRegister`
    divNameUser.className = `name-register`

    const spanName = divNameUser.appendChild(document.createElement('span'))
    spanName.textContent = `Nombre`
    const inputName = divNameUser.appendChild(document.createElement('input'))
    inputName.className = `register-user-name-input`
    inputName.type = `text`

    const divPassUser = formModal.appendChild(document.createElement('div'))
    divPassUser.dataset.id = `passwordsRegister`
    divPassUser.className = `passwords-register`

    const spanPass = divPassUser.appendChild(document.createElement('span'))
    spanPass.textContent = `Contraseña`
    const inputPass = divPassUser.appendChild(document.createElement('input'))
    inputPass.className = `register-user-pass-input`
    inputPass.type = `password`

    const divMailUser = formModal.appendChild(document.createElement('div'))
    divMailUser.dataset.id = `emailRegister`
    divMailUser.className = `email-register`

    const spanMail = divMailUser.appendChild(document.createElement('span'))
    spanMail.textContent = `Email`
    const inputMail = divMailUser.appendChild(document.createElement('input'))
    inputMail.className = `register-user-mail-input`
    inputMail.type = `email`

    const buttonRegister = formModal.appendChild(document.createElement('button'))
    buttonRegister.id = `register`
    buttonRegister.className = `register-button`
    buttonRegister.textContent = `Registrar`

    const buttonClose = formModal.appendChild(document.createElement('button'))
    buttonClose.id = `closeRegister`
    buttonClose.className = `close-register`
    buttonClose.textContent = `Cerrar`

    const divErrors = formModal.appendChild(document.createElement('div'))
    divErrors.dataset.id = `registerAlert`

    const spanErrors = divErrors.appendChild(document.createElement('span'))
    spanErrors.textContent = ``

    principalRegisterModal.show = function(){
        this.style.display = 'block'
    }

    principalRegisterModal.close = function(){
        this.style.display = 'none'
    }

    principalRegisterModal.validateAll = function(){
        if( inputName.value.trim() === `` ||
            inputPass.value.trim() === `` ||
            inputMail.value.trim() === ''
        ){ 
            spanErrors.textContent = `Los campos no pueden estar vacios`
            return false
        }
    
        return {
            errors: spanErrors,
            name: inputName.value.trim(),
            pass: inputPass.value.trim(),
            mail: inputMail.value.trim(),
        }
    }

    return principalRegisterModal
}