const findColorRole = require('../colorrole/findColorRole.js');

module.exports = function(sortedMemberRoles) {
  var colorRole;

  // Searches the first color role
  for (const role of sortedMemberRoles) {
    colorRole = findColorRole(role);
    if(colorRole) return colorRole;
  }

  return colorRole;
}