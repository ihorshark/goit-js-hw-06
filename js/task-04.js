const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = 0;

const onDecrementRefClick = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

const onIncrementRefClick = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

decrementRef.addEventListener('click', onDecrementRefClick);
incrementRef.addEventListener('click', onIncrementRefClick);