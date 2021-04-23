const findColorRole = require('../functions/colorrole/findColorRole.js');
const updateColorRole = require('../functions/colorrole/updateColorRole.js')
module.exports = {
	name: 'roleUpdate',

	execute(oldRole, newRole) {
    const colorRole = findColorRole(oldRole);
    if(colorRole) updateColorRole(colorRole, newRole);
  }
}