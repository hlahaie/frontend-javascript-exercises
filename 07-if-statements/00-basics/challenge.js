module.exports.favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return "Too high";
  }
  else if (guess < fav) {
    return "Too low";
  }
  else {
    return "You got it!";
  }

}

module.exports.checkLock = function(firstNumber, secondNumber, thridNumber, fourthNumber){
  if ((firstNumber === 3 || firstNumber === 5 || firstNumber === 7) && (secondNumber === 2) && (5 <= thridNumber && thridNumber <= 100) && (fourthNumber < 9 || fourthNumber > 20)) {
    return "correct";
  }
  else {
    return "incorrect";
  }
}

module.exports.canIGet = function(item, money) {
  if ((item == "MacBook Air" && money >= 999) || (item == "MacBook Pro" && money >= 1299) || (item == "Mac Pro" && money >= 2499) ||  (item == "Apple Sticker" && money >= 1)) {
    return true;
  }
  else {
    return false;
  }

}
