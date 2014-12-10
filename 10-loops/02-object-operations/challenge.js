module.exports.copy = function(original) {
  var copyValue = {};
  for (var key in original) {
    copyValue[key] = original[key];
  }
  return copyValue;
}

module.exports.extend = function(dest, src) {
  for (var key in src) {
      dest[key] = src[key];
      }
  return dest;
}

module.exports.hasElems = function(hash, arrayToCompare) {
  for (counter = 0; counter < arrayToCompare.length; counter++) {
    if (!hash.hasOwnProperty(arrayToCompare[counter])) {
      return false;
    }
  }
  return true;
}