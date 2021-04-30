const {noColor} = require('../../config.json');

module.exports = function(colorRole, newRole) {
  
  if(colorRole.hexColor !== newRole.hexColor || !colorRole.name.startsWith(newRole.name)) {
    const hexColor = newRole.hexColor == noColor ? '#99aab5' : newRole.hexColor;

    colorRole.edit({ 
      name: newRole.name + hexColor,
      color: hexColor,
      reason: 'base-role was edited',
    })
    .then(updated => console.log(`Updated color-role to ${updated.name}`))
    .catch(console.error);

    return
  }
}
