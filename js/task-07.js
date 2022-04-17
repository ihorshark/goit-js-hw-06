const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('span');

inputRef.addEventListener('change', event => {
    spanRef.style.fontSize = `${event.currentTarget.value}px`;
})