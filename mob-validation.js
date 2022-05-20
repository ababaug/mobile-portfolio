const mobEmail = document.querySelector('#mob-email');
const deskForm = document.querySelector('#desk-form');
const isRequired = (value) => (value !== '');

const isEmailValid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
};

const checkEmail = () => {
  let valid = false;
  const email = mobEmail.value.trim();
  if (!isRequired(email)) {
    showError(mobEmail, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(mobEmail, 'Email is not valid.');
  } else {
    showSuccess(mobEmail);
    valid = true;
  }
  return valid;
};

deskForm.addEventListener('submit', () => {
  isEmailValid();
  checkEmail();
});
