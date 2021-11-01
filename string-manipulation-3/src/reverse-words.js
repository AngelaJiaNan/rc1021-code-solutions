/* exported reverseWords */
function reverseWords(string) {
  var reversedNewWord = [];
  var reversed = string.split(' ');
  for (var i = 0; i < reversed.length; i++) {
    reversed[i].split('').reverse().join('');
    reversedNewWord.push(reversed[i].split('').reverse().join(''));
  }
  return reversedNewWord.join(' ');
}
