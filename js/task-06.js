const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
    if (event.currentTarget.value.length === 6) {
        inputRef.classList.add('valid')
    }
    else {
        inputRef.classList.add('invalid')
    }
})