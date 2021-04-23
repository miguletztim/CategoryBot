const deleteColorRoles = require('../../functions/colorrole/deleteColorRoles.js');

module.exports = {
  name: 'deleteallcolorroles',
  aliases: ['deleteeverycolorrole', 'deleteallcolourroles', 'deleteeverycolourrole'],
  description: 'Deletes all color-roles',
  guildOnly: true,
  cooldown: 30,

  execute(message) {
    deleteColorRoles(message.guild.roles.cache.array())
  }
}