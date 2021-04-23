const { prefix } = require('../../config.json');
const data = [];

module.exports = {
  name: 'help',
  aliases: ['command', 'commands'],
  description: "Information about the bot and it's commands",

  execute(message) {
    /*
    // FIXBUG:
	  for (const command of message.client.commands) {
	      
      data.push(`\n**Name:** ${command.name}`);

      if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
      if (command.description) data.push(`**Description:** ${command.description}`);
      if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
  
      data.push(`**Cooldown:** ${command.cooldown || 0} second(s)`);
	  }
    
    message.channel.send(data, { split: true });
    */
    
    const help =
      '**SETUP**' +
      "```The bot's role highest role needs to be placed higher then every category/color role to assign it to members```" +
      "```Dont place any roles between the color roles and the highest category```" +
      '```You need the MANAGE_ROLES permission and permissions to mention roles to use the bot```' +
      '```Every base-role of a color-role has to have an unambiguous name```' +
      '```Every role with the color #2f3136 will be treated as a category```' +
      '```You have to use the "updateAllMembers" command, after you created/moved a/multiple role(s)```' +
      "```Please don't change the roles too quickly, it could break the bot```" +

      '\n**WARNING**' +
      '```DONT PLACE ANY COLOR-ROLE HIGHER THEN ANY ROLE WITH THE PERMISSIONS TO MANAGE ROLES!```' +

      '\n**COMMANDS**' +
      '```createCategory name - Creates a category```' +
      '```deleteAllCategories - Deletes all categories```' +
      '```createColorRole @role - Creates mentioned color-role(s)```' +
      '```deleteAllColorRoles - Deletes all color-roles```' +
       '```deleteColorRole @role - Deletes a the mentioned color-role(s)```' +
      "```updateAllMembers - Updates every member's roles```" +
      
      '\n**SOCIALS**' +
      '```Creator: Skybertronic```' +
      '```Github: github.com/Skybertronic```' +
      '```Discord: discord.gg/SJ9tmPQt3E```'
    ;

    message.channel.send(help);
  }
}