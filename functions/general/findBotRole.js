module.exports = function(guild, client) {
  const bot = guild.members.cache.find(m => m.user.id === client.user.id);
  return bot.roles.cache.find(r => r.name === bot.user.username);
}