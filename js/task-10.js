function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls input');
const createButtonRef = document.querySelector('[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createButtonRef.addEventListener('click', onCreateButtonRefClick);
destroyButtonRef.addEventListener('click', onDestroyButtonRefClick);

function onCreateButtonRefClick() {
  createBoxes(getInputValue());
}

function onDestroyButtonRefClick() {
  boxesRef.innerHTML = '';
  inputRef.value = 0;
}

const getInputValue = () => inputRef.value;

const createBoxes = (amount) => {

  let elArr = [];

  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    let el = document.createElement('div');
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = getRandomHexColor();
    elArr.push(el);
  }

  boxesRef.append(...elArr);
}