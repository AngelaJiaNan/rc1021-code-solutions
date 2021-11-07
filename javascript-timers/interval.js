function callBack() {
  var text = document.querySelector('h1');
  var currentNumber = text.textContent;
  if (currentNumber > 1) {
    text.textContent = currentNumber - 1;
  } else {
    text.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(callBack, 1000);
