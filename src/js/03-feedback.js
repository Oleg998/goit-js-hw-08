import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const KEY_FORM = 'feedback-form-state';
dataSave();
const formData = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function dataSave() {
  const saveData = JSON.parse(localStorage.getItem(KEY_FORM));
  if (saveData) {
    form.elements.email.value = saveData.email;
    form.elements.message.value = saveData.message;
  }
}

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();

  const email = evt.target.email.value;
  const message = evt.target.message.value;

  if (!email || !message) {
    alert('Please fill in both email and message fields before submitting.');
    return;
  }
  evt.target.reset();
  localStorage.removeItem(KEY_FORM);
}
