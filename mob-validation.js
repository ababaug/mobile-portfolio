const mobEmail = document.querySelector('#mob-email');
const mobForm = document.querySelector('#mob-form');
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
  const error = document.querySelector('#mob-error');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = document.querySelector('#mob-error');
  error.textContent = '';
};

const checkEmail = (e) => {
  let valid = false;
  const email = mobEmail.value.trim();
  if (!isRequired(email)) {
    showError(mobEmail, 'Email cannot be blank.');
    e.preventDefault();
  } else if (!isEmailValid(email)) {
    showError(mobEmail, 'Email is not valid.');
    e.preventDefault();
  } else if (email.toLowerCase()!== email){
    showError(mobEmail,'Email should in lower case letters');
    e.preventDefault();
  } else {
    showSuccess(mobEmail);
    valid = true;
  }
  return valid;
};

mobForm.addEventListener('submit', (e) => {
  
  isEmailValid();
  checkEmail(e);
});