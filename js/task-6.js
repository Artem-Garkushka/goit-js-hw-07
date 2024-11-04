function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const formDiv = document.querySelector('#controls');
const boxDiv = document.querySelector('#boxes');

const input = document.querySelector('input[type="number"]');

const createBtn = document.querySelector('button[data-create]');
createBtn.classList.add('create');

const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.classList.add('destroy');

const makeBox = createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = Number(input.value);
  boxDiv.innerHTML = '';
  let size = 30;
  if (amount < 1 || amount > 100) {
    return;
  }
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxDiv.append(box);
    size += 10;
  }
  input.value = '';
}

const deleteBox = destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxDiv.innerHTML = '';
}
