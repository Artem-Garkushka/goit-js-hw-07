const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email: email,
    password: password,
  };

  console.log(data);
  registerForm.reset();
}