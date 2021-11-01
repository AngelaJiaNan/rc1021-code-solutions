/* exported titleCase */
function titleCase(title) {
  var titleNew = [];
  var minorWords = ['in', 'for', 'of', 'the', 'to'];
  var splitArray = title.split(' ');
  var isSubtitle = false;
  for (var i = 0; i < splitArray.length; i++) {
    var isJavascript = splitArray[i].toLowerCase() === 'javascript';
    var isAPI = splitArray[i] === 'api';
    var isWeb = splitArray[i] === 'web';
    var isTitle = splitArray[i].includes(':');
    var hasHyphen = splitArray[i].includes('-');
    if ((i === 0 || ((splitArray[i].length > 3 || isWeb) && !minorWords.includes(splitArray[i].toLowerCase()))) && !isJavascript && !isAPI && !isTitle && !hasHyphen) {
      splitArray[i][0].toUpperCase();
      splitArray[i].slice(1);
      var wholeWord = splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
    } else if (splitArray[i].includes('-')) {
      var newWord = splitArray[i].split('-');
      wholeWord = newWord.map(w => w[0].toUpperCase() + w.slice(1)).join('-');
    } else if (isJavascript) {
      wholeWord = 'JavaScript';
    } else if (isSubtitle) {
      wholeWord = splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
      isSubtitle = false;
    } else if (isTitle) {
      wholeWord = splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
      if (splitArray[i].toLowerCase() === 'javascript:') {
        wholeWord = 'JavaScript:';
      }
      isSubtitle = true;
    } else if (isAPI) {
      wholeWord = splitArray[i].toUpperCase();
    } else {
      wholeWord = splitArray[i];
    }

    titleNew.push(wholeWord);
  }
  return titleNew.join(' ');
}
