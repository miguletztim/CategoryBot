module.exports = function(colorRole, newRole) {
  
  if(colorRole.hexColor !== newRole.hexColor || !colorRole.name.startsWith(newRole.name)) {
    colorRole.edit({ 
      name: newRole.name + newRole.hexColor,
      color: newRole.color,
      reason: 'base-role was edited',
    })
    .then(updated => console.log(`Updated color-role to ${updated.name}`))
    .catch(console.error);

    return
  }
}