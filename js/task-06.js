const inputRef = document.querySelector('#validation-input');
const dataLengthRef = document.querySelector('[data-length="6"]')

inputRef.addEventListener('blur', event => {
    if (event.currentTarget.value.trim().length === Number(dataLengthRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid')
    }
    else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid')
    }
})
