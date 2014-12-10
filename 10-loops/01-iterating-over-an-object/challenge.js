module.exports.getKeys = function(keys) {
  var keyProperty = [];
  for (var key in keys) {
    keyProperty.push(key);
  }

  // var keyProperty = Object.keys(keys);
  return keyProperty;
}

module.exports.getValues = function(objectValue) {
  var valueProperty = [];
  for (var name in objectValue) {
    valueProperty.push(objectValue[name]);
  }
  return valueProperty;
}

module.exports.objectToArray = function(arrayValue) {
  var keyIsValue = [];
  for (var keys in arrayValue) {
    keyIsValue.push(keys + " is " + arrayValue[keys]);
  }
  return keyIsValue;
}
