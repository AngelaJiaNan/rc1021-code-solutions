/* exported isLowerCased */
function isLowerCased(word) {
  var wordLowerCase = false;
  for (var i = 0; i < word.length; i++) {
    if (word === word.toLowerCase()) {
      wordLowerCase = true;
    }
  }
  return wordLowerCase;
}
