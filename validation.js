const submitBtn = document.querySelector('.get-in-touch');
const nameContact = document.querySelector('#contact');
const form = document.querySelector('form');
const mail = document.querySelector('#email');
const message = document.querySelector('#message');

// if (nameContact.value === '') {
//   nameContact.setCustomValidity('Fill in this field');
// } else {
//   nameContact.setCustomValidity('');
// }

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
  } else {
    mail.setCustomValidity('Enter a valid email address (only lower case letter allowed)');
  }
});

nameContact.addEventListener('input', () => {
  if (nameContact.validity.valueMissing) {
    nameContact.setCustomValidity('Fill in this field');
    nameContact.classList.add('error');
  } else {
    nameContact.setCustomValidity('');
  }
  if (nameContact.value.length < 3) {
    nameContact.setCustomValidity('Name must be at least 3 characters long');
  } else {
    nameContact.setCustomValidity('');
  }
});

message.addEventListener('input', () => {
  if (message.validity.valueMissing) {
    message.setCustomValidity('Fill in this field');
  } else {
    message.setCustomValidity('');
  }
  if (message.value.length < 10) {
    message.setCustomValidity('Message must be at least 10 characters long');
  } else {
    message.setCustomValidity('');
  }
});

submitBtn.addEventListener('click', () => {
  if (nameContact.value === '') {
    nameContact.classList.add('error');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameContact.checkValidity() && mail.checkValidity() && message.checkValidity()) {
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    form.submit();
  } else if (nameContact.value === '') {
    // ask the user to fill in the form with no alert box
    nameContact.reportValidity();
    mail.reportValidity();
    message.reportValidity();
  }
});
});
