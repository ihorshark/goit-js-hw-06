const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

decrementRef.addEventListener('click', onDecrementRefClick);
incrementRef.addEventListener('click', onIncrementRefClick);

function onDecrementRefClick() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

function onIncrementRefClick() {
    counterValue += 1;
    valueRef.textContent = counterValue;
}