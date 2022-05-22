const deskEmail = document.querySelector('#desk-email');
const deskForm = document.querySelector('#desk-form');
const isDeskRequired = (value) => (value !== '');

const isDeskEmailValid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const deskShowError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = document.querySelector('#desk-error');
  error.textContent = message;
};

const deskShowSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = document.querySelector('#desk-error');
  error.textContent = '';
};

const deskCheckEmail = (e) => {
  let valid = false;
  const email = deskEmail.value.trim();
  if (!isDeskRequired(email)) {
    deskShowError(deskEmail, 'Email cannot be blank.');
    e.preventDefault();
  } else if (!isDeskEmailValid(email)) {
    deskShowError(deskEmail, 'Email is not valid.');
    e.preventDefault();
  } else if (email.toLowerCase() !== email) {
    deskShowError(deskEmail, 'Email should be in lower case letters');
    e.preventDefault();
  } else {
    deskShowSuccess(deskEmail);
    valid = true;
  }
  return valid;
};

deskForm.addEventListener('submit',
  (e) => {
    isDeskEmailValid();
    deskCheckEmail(e);
  });
