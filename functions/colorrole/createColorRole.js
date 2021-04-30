const findColorRole = require('./findColorRole.js');
const {noColor} = require('../../config.json');

module.exports = function(username, position, baseRole) {

  if(!findColorRole(baseRole)) {
    const hexColor = baseRole.hexColor == noColor ? '#99aab5' : baseRole.hexColor;
    return baseRole.guild.roles.create({
      data: {
        name: baseRole.name + hexColor,
        color: hexColor,
        permissions: [],
        position: position,
      },
      reason: `${username} wanted to create a new color-role`, 
    })
    .then(created => console.log(`Created color-role ${created.name}`))
    .catch(console.error);
  }
}
