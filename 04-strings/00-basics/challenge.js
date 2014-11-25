module.exports.formLetter = function(firstName, senderName, message) {
  var result = "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
  return (result);
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var result = bigString.slice(startA, endA) + bigString.slice(startB, endB);
  return (result);
};

module.exports.findFirstMatch = function(text, searchString) {
  var result = text.indexOf(searchString);
  return(result);
};

module.exports.findLastMatch = function(text, searchString) {
  var result = text.lastIndexOf(searchString);
  return(result);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var firstSearchString = text.indexOf(searchString);
  var lastSearchString = text.lastIndexOf(searchString);
  var beginingWordString = searchString.length;
  var result = text.slice(firstSearchString + beginingWordString, lastSearchString);
  return(result);
};