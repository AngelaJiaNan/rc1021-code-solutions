/* exported tail */
function tail(array) {
  var result1 = [];
  for (var i = 1; i < array.length; i++) {
    result1.push(array[i]);
  }
  return result1;
}
