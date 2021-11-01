/* exported drop */
function drop(array, count) {
  if (array.length <= count) {
    return array;
  }
  return array.slice(count);
}
