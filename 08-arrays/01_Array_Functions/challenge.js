module.exports.reversePlusOne = function(arrayOne) {
  arrayOne.reverse();
  arrayOne.unshift(1);
  return arrayOne;
}

module.exports.plusesEverywhere = function(arrayTwo) {
  var newValue = arrayTwo.join("+");
  return newValue;
}

module.exports.arrayQuantityPlusOne = function(arrayThree) {
  return arrayThree.length+1;
}