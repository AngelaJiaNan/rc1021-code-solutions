/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (key in target) {
      continue;
    } else {
      target[key] = source[key];
    }
  }
}
