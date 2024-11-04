const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

button.addEventListener('click', function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  textColor.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}