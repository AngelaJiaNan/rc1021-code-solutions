/* exported sumAll */
function sumAll(numbers) {
  var totalNumbers = 0;
  for (var i = 0; i < numbers.length; i++) {
    totalNumbers += numbers[i];
  }
  return totalNumbers;
}
