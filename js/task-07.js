const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('change', event => {
    spanRef.style.fontSize = `${event.currentTarget.value}px`;
})