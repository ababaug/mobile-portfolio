const emailMob=document.querySelector('#mob-email');

const mobEmail=document.querySelector('#mob-email');
mobEmail.addEventListener('submit', () => {
  const checkEmail = () => {
      if (!hasValue(input, requiredMsg)) {
          return false;
      }
      // validate email format
      const emailRegex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const email = input.value.trim();
      if (!emailRegex.test(email)) {
          return showError(input, invalidMsg);
      }
      return true;
  };
});