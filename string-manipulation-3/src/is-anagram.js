/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var splitString = firstString.replaceAll(' ', '').split('');
  var sortString = splitString.sort().join('');
  var secondStringSplit = secondString.replaceAll(' ', '').split('').sort().join('');
  return sortString === secondStringSplit;
}
