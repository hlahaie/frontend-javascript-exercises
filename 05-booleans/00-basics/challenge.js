module.exports.equalStrings = function(stringOne, stringTwo) {
  var compareStrings = stringOne == stringTwo;
  return compareStrings;
};

module.exports.notEqual = function(one, two) {
  var compareValues = one !== two;
  return compareValues;
};

module.exports.inBetween = function(lower, middle, upper) {
  var compareMiddle = lower < middle && middle < upper;
  return compareMiddle;
};

module.exports.outsideRanges = function(number) {
  var compareOutside = (10 > number || number > 20) && (42 >= number || number > 75) && (1 >= number || number >= 6);
  return compareOutside;
};

module.exports.nameAndPrice = function(name, price) {
  var compareNamdAndPrice = (name == "NYTimes" || name == "LATimes") && (price >= 1);
  return compareNamdAndPrice;
};
