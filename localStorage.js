const emailStore = document.querySelector('#email');
const nameStore = document.querySelector('#contact');
const formListen = document.querySelector('form');

const storeData = {
  name: '',
  email: '',
};

formListen.addEventListener('input', () => {
  storeData.name = nameStore.value;
  storeData.email = emailStore.value;
  localStorage.setItem('UserData', JSON.stringify(storeData));
});

// check if localStorage is empty
if (localStorage.getItem('UserData') === null) {
  localStorage.setItem('UserData', JSON.stringify(storeData));
} else {
  const data = JSON.parse(localStorage.getItem('UserData'));
  nameStore.value = data.name;
  emailStore.value = data.email;
}