var _ = require('lodash');
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
form.addEventListener('input', _.throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  console.log(formData);
}
form.addEventListener('submit', onFormSubmit);

(function () {
  let savedInput = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedInput) {
    savedInput = JSON.parse(savedInput);
  } else {
    return;
  }

  Object.entries(savedInput).forEach(([name, value]) => (form.elements[name].value = value));
})();
