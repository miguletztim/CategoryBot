const createColorRole = require('../../functions/colorrole/createColorRole.js');
const findBotRole = require('../../functions/general/findBotRole.js');

module.exports = {
  name: 'createcolorroles',
  aliases: ['createcolorrole', 'createcolourroles', 'createcolourrole'],
  description: 'Creates a fitting color-role',
  usage: '<@baseRole>',
  guildOnly: true,
  args: true,

  execute(message, client) {
    const botRole = findBotRole(message.guild, client);

    if(!botRole) {
      message.repy("The bot-role name doesn't fit the bots username");
      return 
    }

    const author = message.member.user.username;
    const position = botRole.position;
    const baseRoles = message.mentions.roles;

    baseRoles.forEach(baseRole => {
      createColorRole(author, position, baseRole);
    })
  }
}