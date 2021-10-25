/* exported chunk */
function chunk(array, size) {
  var chunkArray = [];
  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    chunkArray.push(chunk);
  }
  return chunkArray;
}
