const {categoryHexColor, noColor} = require('../../config.json');
module.exports = function(colorRole, roles) {
  var returnValue = true;

  roles.forEach(r => {
    if(r.position > colorRole.position && r.hexColor !== (categoryHexColor && noColor)) {
      returnValue = false;
    }
  })

  return returnValue;
}