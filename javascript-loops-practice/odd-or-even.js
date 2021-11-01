/* exported oddOrEven */
function oddOrEven(numbers) {
  var evenOdd = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      evenOdd.push('odd');
    } else {
      evenOdd.push('even');
    }
  }
  return evenOdd;
}
