function handleLoad() {
  var $text = document.querySelector('h1');
  $text.textContent = 'Hello There';
}

setTimeout(handleLoad, 2000);
