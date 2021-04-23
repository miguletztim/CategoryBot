const {categoryHexColor} = require('../../config.json');
const sortRoles = require('../general/sortRoles.js');

module.exports = function(roles) {

  sortRoles(roles).forEach(role => {
    if(role.hexColor === categoryHexColor) {
      role.delete(`Someone told me to!`) // FIXBUG Reason
      .then(deleted => console.log(`Deleted category ${deleted.name} in ${deleted.guild.name}`));
    }
  })
}