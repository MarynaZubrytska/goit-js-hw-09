const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';

form.addEventListener('input', e => {
  const { name, value } = e.target;

  formData[name] = value.trim();

  localStorage.setItem(key, JSON.stringify(formData));
});

const savedData = localStorage.getItem(key);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(key);
  form.reset();
  formData.email = '';
  formData.message = '';
});
