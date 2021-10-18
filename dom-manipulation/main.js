var numbersOfTimes = 0;
function numbersOfTimesfunction() {
  numbersOfTimes += 1;

  document.querySelector('.click-count').textContent = 'clicks:' + numbersOfTimes;
  const result2 = document.querySelector('.hot-button');
  if (numbersOfTimes < 4) {
    result2.className = 'hot-button cold';
  } else if (numbersOfTimes < 7) {
    result2.className = 'hot-button cool';
  } else if (numbersOfTimes < 10) {
    result2.className = 'hot-button tepid';
  } else if (numbersOfTimes < 13) {
    result2.className = 'hot-button warm';
  } else if (numbersOfTimes < 16) {
    result2.className = 'hot-button hot';
  } else if (numbersOfTimes > 16) {
    result2.className = 'hot-button nuclear';
  }
}

var buttonClick = document.querySelector('.hot-button');

// var numbersOfClick = document.querySelector('.click-count');

buttonClick.addEventListener('click', numbersOfTimesfunction);
