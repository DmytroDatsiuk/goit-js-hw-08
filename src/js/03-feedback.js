import throttle from 'lodash.throttle';
import { save, load } from './storage';
// import load from './storage';

const refs = {
  form: document.querySelector('.js-feadback-form'),
  input: document.querySelector('.js-feadback-form input'),
  textarea: document.querySelector('.js-feadback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onEmailAndMessageInput, 500));

populateTextarea();
// load(key)

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(populateTextarea());
  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function onEmailAndMessageInput(evt) {
  formData[evt.target.name] = evt.target.value;
  //   console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  //   save(STORAGE_KEY, JSON.stringify(formData))
//   save();
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  // load(savedMessage)
  if (savedMessage) {
    const savedEmailAndPassword = JSON.parse(savedMessage);

    // load(savedEmailAndPassword);

    refs.input.value = savedEmailAndPassword.email;
    refs.textarea.value = savedEmailAndPassword.message;

    return savedEmailAndPassword
  }
}
