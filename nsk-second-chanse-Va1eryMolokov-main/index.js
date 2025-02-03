import * as funcs from './utils.js';

const warningState = {
  nameWarning: {
    valid: false,
    rendered: false,
    text: 'Имя введено некорректно.',
  },
  passwordWarning: {
    valid: false,
    rendered: false,
    text: 'Пароль должен содержать не менее 8 символов, включать цифры.',
  },
};

const handleWarning = (warningName, node) => {
  const warning = warningState[warningName];

  if (!warning.valid && !warning.rendered) {
    warning.rendered = true;
    const warningMessage = document.createElement('div');
    warningMessage.textContent = warning.text;
    warningMessage.style.color = 'red';
    warningMessage.style.fontSize = '12px';
    node.insertAdjacentElement('afterend', warningMessage);
  } else if (warning.valid && warning.rendered) {
    const warningMessage = node.nextElementSibling;
    warningMessage.remove();
    warning.rendered = false;
  }
};

const nameField = document.querySelector('#name');
nameField.addEventListener('input', (event) => {
  const isValidName = funcs.isValidName || (() => {});
  warningState.nameWarning.valid = isValidName(event.target.value);
  handleWarning('nameWarning', nameField);
});

const passwordField = document.querySelector('#password');
passwordField.addEventListener('input', (event) => {
  const isValidPassword = funcs.isValidPassword || (() => {});
  warningState.passwordWarning.valid = isValidPassword(event.target.value);
  handleWarning('passwordWarning', passwordField);
});
