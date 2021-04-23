module.exports = function(role) {
  return role.guild.roles.cache.find(r => r.name.startsWith(role.name + '#'));
}