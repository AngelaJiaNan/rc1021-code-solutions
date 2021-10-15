/* exported countdown */
function countdown(number) {
  var numbers = [];
  var n = number;
  while (n >= 0) {
    numbers.push(n);
    n -= 1;
  }
  return numbers;
}
