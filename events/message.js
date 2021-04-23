const {prefix} = require('../config.json');

module.exports = {
	name: 'message',

  execute(message, client) {
      
    // Checks Prefix
    if (!message.toString().startsWith(prefix)) {
      return 
    }
  
    // Checks permission
    if(!message.member.permissions.has('MANAGE_ROLES') || message.author.bot) {
      message.reply('NO ACCESS!'); // FIXBUG: Embed
      console.log(`${message.member.user.username} no access`);
      return 
    }
  
    // Extracts the command FIXBUG Clean up code
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    console.log(commandName);

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if(!command) return console.log("Not a valid command");

    // Checks for mistakes in the argument
    if(command.args && !args.length) { // FIXBUG Embed
      let reply = `You didn't provide any arguments, ${message.author}!`;

      if (command.usage) {
        reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
      }

      return message.channel.send(reply);
	  }

    if (command.guildOnly && message.channel.type === 'dm') {
	    return message.reply('I can\'t execute that command inside DMs!');
    }

    // FIXBUG: Maybe add a cooldown method

    // Executes the command
    try {
	    command.execute(message, client);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  }
}