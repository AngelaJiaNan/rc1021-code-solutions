/* exported dropRight */
function dropRight(array, count) {
  if (array.length <= count) {
    return array;
  }
  return array.slice(0, array.length - count);
}
