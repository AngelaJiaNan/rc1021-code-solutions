/* exported reverse */
function reverse(array) {
  var result3 = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result3.push(array[i]);
  }
  return result3;
}
