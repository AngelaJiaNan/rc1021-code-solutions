/* exported take */
function take(array, count) {
  if (array.length <= count) {
    return array;
  }
  return array.slice(0, count);
}
