/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  for (var i = 0; i < 10; i++) {
    numbers.push(currentNumber);
    currentNumber = currentNumber + 1;
  }
  return numbers;
}
var res = getNumbersToTen();
console.log('getNumbersToTen()', res);

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  for (var i = 0; i < 20; i++) {
    evenNumbers.push(currentNumber);
    currentNumber = currentNumber + 2;
  }
  return evenNumbers;
}
var result = getEvenNumbersToTwenty();
console.log('getEvenNumbersToTwenty()', result);

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  for (var i = count; i < times; i++) {
    repeated += word;
    count = count + 1;
  }
  return repeated;
}
var answer = repeatWord('math', 20);
console.log('repeatWord(math, 20)', answer);

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
logEachCharacter('math');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
var result1 = doubleAll([2, 5, 6, 7]);
console.log('doubleAll([2, 5, 6, 7])', result1);

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
var result2 = getKeys({ isbn: '9534', title: 'math', author: 'Dr.Axel' });
console.log('getKeys({ isbn: 9534, title: math, author: Dr.Axel })', result2);

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
var result3 = getValues({ isbn: '9534', title: 'math', author: 'Dr.Axel' });
console.log('getValues({ isbn: 9534, title: math, author: Dr.Axel })', result3);
