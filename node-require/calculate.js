const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let result = 0;

function calculate() {
  const x = Number(process.argv[2]);
  const y = Number(process.argv[4]);
  if (process.argv[3] === 'plus') {
    result = add(x, y);
  } else if (process.argv[3] === 'minus') {
    result = subtract(x, y);
  } else if (process.argv[3] === 'times') {
    result = multiply(x, y);
  } else if (process.argv[3] === 'by') {
    result = divide(x, y);
  }
  return result;
}

calculate();
console.log('result:', result);
