/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in source) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
