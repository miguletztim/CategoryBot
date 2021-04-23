const findColorRole = require('../functions/colorrole/findColorRole.js');
module.exports = {
	name: 'roleDelete',

	execute(role) {
    const colorRole = findColorRole(role);
    if(colorRole) colorRole.delete('base-role was deleted');
  }
}