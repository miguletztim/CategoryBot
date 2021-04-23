const deleteColorRoles = require('../../functions/colorrole/deleteColorRoles.js');

module.exports = {
  name: 'deletecolorroles',
  aliases: ['deletecolorrole', 'deletecolourroles', 'deletecolourrole'],
  description: 'Deletes a the mentioned color-role(s)',
  usage: '<@colorRole>',
  guildOnly: true,
  args: true,

  execute(message) {
    deleteColorRoles(message.mentions.roles.array());
  }
}