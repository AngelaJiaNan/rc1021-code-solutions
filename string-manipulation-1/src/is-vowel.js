/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'E', 'I', 'o', 'u', 'y'];
  var result = false;
  for (var i = 0; i < char.length; i++) {
    if (vowels.includes(char[i])) {
      result = true;
    }
  }
  return result;
}
