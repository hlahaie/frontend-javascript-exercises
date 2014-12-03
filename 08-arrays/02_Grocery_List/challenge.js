module.exports.addItem = function(newItem, list) {
  if (list.indexOf(newItem) >= 0) {
    var groceryList = list;
    return groceryList;
  }
  else {
    var groceryList = list;
    groceryList.push(newItem);
    return groceryList;
  }
}

module.exports.reverseSortedList = function(list) {
  var newList = list;
  newList.sort();
  newList.reverse();
  return newList;
}