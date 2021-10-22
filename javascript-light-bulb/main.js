var onandOff = true;
var button = document.querySelector('.yellow-button');
var main = document.querySelector('main');
function turnOnandOff() {
  if (onandOff) {
    button.className = 'yellow-button off';
    main.className = 'off';
  } else {
    button.className = 'yellow-button';
    main.className = '';
  }
  onandOff = !onandOff;
}
button.addEventListener('click', turnOnandOff);
