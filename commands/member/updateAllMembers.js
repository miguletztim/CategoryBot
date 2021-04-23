const updateAllMembers = require('../../functions/member/updateAllMembers.js');

module.exports = {
  name: 'updateallmembers',
  aliases: ['updateeverymember'],
  description: "Updates every member's roles",
  guildOnly: true,
  cooldown: 600,

  execute(message) {
    console.log();
    updateAllMembers(message.guild);
  }
}