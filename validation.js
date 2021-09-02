const submitBtn = document.querySelector('.get-in-touch');
const nameContact = document.querySelector('#contact');
const form = document.querySelector('form');
const mail = document.querySelector('#email');
const message = document.querySelector('#message');

if (nameContact.value === '') {
  nameContact.setCustomValidity('Fill in this field');
} else {
  nameContact.setCustomValidity('');
}

if (mail.value === '') {
  mail.setCustomValidity('Fill in this field');
} else {
  mail.setCustomValidity('');
}

if (message.value === '') {
  message.setCustomValidity('Fill in this field');
} else {
  message.setCustomValidity('');
}

mail.addEventListener('input', () => {
  // check the email format, no upper case, no empty value
  if (mail.value.toLowerCase() === mail.value && mail.value !== '') {
    mail.setCustomValidity('');
    mail.classList.remove('error');
  } else {
    mail.setCustomValidity('Enter a valid email address (only lower case letter allowed)');
    mail.classList.add('error');
  }
});

nameContact.addEventListener('input', () => {
  if (nameContact.validity.valueMissing) {
    nameContact.classList.add('error');
    nameContact.setCustomValidity('Fill in this field');
  } else {
    nameContact.setCustomValidity('');
    nameContact.classList.remove('error');
  }
  if (nameContact.value.length < 3) {
    nameContact.setCustomValidity('Name must be at least 3 characters long');
    nameContact.classList.add('error');
  } else {
    nameContact.setCustomValidity('');
    nameContact.classList.remove('error');
  }
});

message.addEventListener('input', () => {
  if (message.validity.valueMissing) {
    message.setCustomValidity('Fill in this field');
    message.classList.add('error');
  } else {
    message.setCustomValidity('');
    message.classList.remove('error');
  }
  if (message.value.length < 10) {
    message.setCustomValidity('Message must be at least 10 characters long');
    message.classList.add('error');
  } else {
    message.setCustomValidity('');
    message.classList.remove('error');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameContact.checkValidity() && mail.checkValidity() && message.checkValidity()) {
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    form.submit();
  } else if (nameContact.value === '') {
    nameContact.reportValidity();
    mail.reportValidity();
    message.reportValidity();
  }
});
