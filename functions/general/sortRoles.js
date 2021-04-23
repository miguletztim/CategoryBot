const highestPosition = require("./highestPosition.js")

module.exports = function(unsortedArray) {
   var sortedArray = new Array(highestPosition(unsortedArray+1));

  for(var i = 0; i<unsortedArray.length; i++) {
    sortedArray[unsortedArray[i].position] = unsortedArray[i];
  }

  return sortedArray.filter(v => v !== undefined).reverse(); // FIXBUG remove reverse
}