module.exports.newArray = function (indexOne, indexTwo, indexThree, indexFour) {
  var resultArray = [indexOne, indexTwo, indexThree, indexFour];
  return resultArray;
}

module.exports.firstAndLast = function (arrayOne) {
  var newArray = [arrayOne[0], arrayOne[arrayOne.length-1]];
  return newArray;
}