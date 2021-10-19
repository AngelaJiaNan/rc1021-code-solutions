
var modal = document.querySelector('#myModal');
var botton = document.querySelector('#myBtn');
var no = document.querySelector('#noBtn');

function open() {
  modal.className = 'modal close';
}

function close() {
  no.className = 'modal';
  modal.className = 'modal';
}
botton.addEventListener('click', open);
no.addEventListener('click', close);
