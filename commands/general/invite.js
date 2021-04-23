module.exports = {
  name: 'invite',
  description: 'Sends an invite link to invite the bot to other servers',

  execute(message) {
    message.reply('https://discord.com/api/oauth2/authorize?client_id=830909126418104382&permissions=268437568&redirect_uri=http%3A%2F%2Flocalhost%3A5000&scope=bot')
  }
}