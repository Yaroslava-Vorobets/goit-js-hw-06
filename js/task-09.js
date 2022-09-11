const body = document.querySelector('body');
const color =  document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

function handlerclick  () {
  const currentColor = getRandomHexColor();
  color.textContent = currentColor;
  body.style.backgroundColor = currentColor;
 }


btnChangeColor.addEventListener('click', handlerclick)

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}