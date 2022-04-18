function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const bgcSpanRef = document.querySelector('.color')
const buttonRef = document.querySelector('.change-color');

const onButtonRefClick = event => {
  const color = getRandomHexColor();

  bodyRef.style.backgroundColor = color;
  bgcSpanRef.textContent = color;
}

buttonRef.addEventListener('click', onButtonRefClick)