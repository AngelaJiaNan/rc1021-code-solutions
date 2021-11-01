/* exported isPalindromic */
function isPalindromic(string) {
  var splitString = string.split('');
  var reverseArray = splitString.reverse();
  var joingArray = reverseArray.join('').split(' ').join('');
  return string.split(' ').join('') === joingArray;
}
