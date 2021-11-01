/* exported isUpperCased */
function isUpperCased(word) {
  var wordUpperCase = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      wordUpperCase = false;
    }
  }
  return wordUpperCase;
}
