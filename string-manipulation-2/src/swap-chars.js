/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var letters = string.split('');
  letters[firstIndex] = string[secondIndex];
  letters[secondIndex] = string[firstIndex];
  return letters.join('');
}
