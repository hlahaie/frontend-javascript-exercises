module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var courseInfo = {
      title: courseTitle,
      duration: courseDuration,
      students: courseStudents
};
return courseInfo;
}

module.exports.addProperty = function(object, newProp, newValue) {
  var addToObject = object;
  if (!addToObject.hasOwnProperty(newProp)) { 
    addToObject[newProp] = newValue;
  }
  // if (addToObject[newProp] === undefined) {
  //   addToObject[newProp] = newValue;
  // }
  return addToObject;
}

module.exports.formLetter = function(letter) {
  var combineLetter = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
  return combineLetter;
}

module.exports.canIGet = function(item, money) {
  //Construct a hash

  var productHash = {
    'macbook air': 999,
    'macbook pro': 1299,
    'mac pro': 2499,
    'apple sticker': 1
  };

  return productHash[item.toLowerCase()] <= money;

}
