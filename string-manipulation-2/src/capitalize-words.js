/* exported capitalizeWords */
function capitalizeWords(string) {
  // eslint-disable-next-line quotes
  var capitalWord = string.toLowerCase().split(" ");
  for (var i = 0; i < capitalWord.length; i++) {
    capitalWord[i] = capitalWord[i].charAt(0).toUpperCase() + capitalWord[i].substring(1);
  }
  return capitalWord.join(' ');
}
