/* exported invert */
function invert(source) {
  var newObject = {};
  for (var key in source) {
    const newKey = source[key];
    newObject[newKey] = key;
  }
  return newObject;
}
