const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = 0;

const decreaseValue = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

const increaseValue = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

decrementRef.addEventListener('click', decreaseValue);
incrementRef.addEventListener('click', increaseValue);