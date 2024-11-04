const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
textInput.addEventListener('input', function () {
  const textInputTrim = textInput.value.trim();
  if (textInputTrim === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = textInputTrim;
  }
});