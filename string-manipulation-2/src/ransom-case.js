/* exported ransomCase */
function ransomCase(string) {
  let upperCase = true;
  let answer = string[0].toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (upperCase) {
      answer += string[i].toUpperCase();
    } else {
      answer += string[i].toLowerCase();
    }
    upperCase = !upperCase;
  }
  return answer;
}
