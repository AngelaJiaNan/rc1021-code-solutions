/* exported capitalizeWord */
function capitalizeWord(word) {
  var answer = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    answer += word[i].toLowerCase();
  }
  if (answer === 'Javascript') return 'JavaScript';
  return answer;
}
