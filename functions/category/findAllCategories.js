const sortRoles = require('../general/sortRoles.js')
const {categoryHexColor} = require('../../config.json')
const List = require('collections/list');

module.exports = function(roles) {
  var categories = new List();
  
  sortRoles(roles).forEach(role => {
    if(role.hexColor === categoryHexColor) {
      categories.add(role);
    }
  });

  return categories.toArray().reverse(); // FIXBUG try to remove reverse
}