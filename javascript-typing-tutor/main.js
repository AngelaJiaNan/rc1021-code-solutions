var text = document.querySelectorAll('span');
var currentPosition = 0;
// console.log(text);
document.addEventListener('keydown', function (document) {
  if (document.key === 'ArrowDown') {
    text[currentPosition].className = 'correct';
  } else {
    text[currentPosition].className = 'incorrect';
  }
  if (currentPosition > 0) {
    text[currentPosition - 1].className = 'correct';
  }
  currentPosition += 1;

});
