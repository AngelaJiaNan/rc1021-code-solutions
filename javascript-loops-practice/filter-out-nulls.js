/* exported filterOutNulls */
function filterOutNulls(values) {
  var integer = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      integer.push(values[i]);
    }
  }
  return integer;
}
