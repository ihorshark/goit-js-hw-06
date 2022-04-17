const inputRef = document.querySelector('#validation-input');
const dataLengthRef = document.querySelector('[data-length="6"]')



inputRef.addEventListener('blur', event => {
    if (event.currentTarget.value.length === Number(dataLengthRef.dataset.length)) {
        inputRef.classList.add('valid')
    }
    else {
        inputRef.classList.add('invalid')
    }
})
