import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
let formData = {};
const KEY_FORM = 'feedback-form-state';
dataSave();


form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function dataSave() {
  const saveData = JSON.parse(localStorage.getItem(KEY_FORM));
  if (saveData) {
    form.elements.email.value = saveData.email ?? '';
    form.elements.message.value = saveData.message ?? '';
    for (const key in saveData) {
      if (saveData.hasOwnProperty(key)) {
        formData[key] = saveData[key];
      }
    }
  }
}

function onInput(evt) {

  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  const email = evt.target.email.value;
  const message = evt.target.message.value.trim();

  if (!email || !message) {
    alert('Please fill in both email and message fields before submitting.');
    return;
  }
  const FormSubmit = {
    email,
    message,
  };
  console.log(FormSubmit);
  evt.target.reset();
   clearFormData();
  localStorage.removeItem(KEY_FORM);
}
function clearFormData() {
  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
       formData={}
    }
  }
}
