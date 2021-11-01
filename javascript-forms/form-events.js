function handleFocus(event) {
  console.log('focus');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var user = document.querySelector('#user-name');
var email = document.querySelector('#user-email');
var msg = document.querySelector('#user-message');
console.log(user);
console.log(email);

user.addEventListener('focus', handleFocus);
user.addEventListener('blur', handleBlur);
user.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);

msg.addEventListener('focus', handleFocus);
msg.addEventListener('blur', handleBlur);
msg.addEventListener('input', handleInput);
