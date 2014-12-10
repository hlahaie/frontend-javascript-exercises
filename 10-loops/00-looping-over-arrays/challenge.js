module.exports.sumNumbers = function(number) {
  var addNumbers = 0;
  for (var counter = 0; counter < number.length; counter++) {
    addNumbers = addNumbers + number[counter];
  }
  return addNumbers;
}

module.exports.splitAndLowerCaseString = function(inputString) {
 var changeString = inputString.split(",");
 for (var counter = 0; counter < changeString.length; counter++) {
    changeString[counter] = changeString[counter].toLowerCase();
 }
 return changeString;
}

module.exports.addIndex = function(initialData) {
  var addToString = [];
  for (var counter = 0; counter < initialData.length; counter++) {
    addToString[counter] = counter + " is " + initialData[counter].toString();
  }
  return addToString;
}
