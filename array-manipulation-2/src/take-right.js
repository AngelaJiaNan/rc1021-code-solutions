/* exported takeRight */
function takeRight(array, count) {
  if (array.length <= count) {
    return array;
  }
  return array.slice(array.length - count);
}
