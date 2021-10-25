/* exported numVowels */
function numVowels(string) {
  var numbersofVowels = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      numbersofVowels += 1;
    }
  }
  return numbersofVowels;
}
