const updateMember = require("./updateMember.js");

module.exports = async function(guild) {
  // gets every member
  await guild.members.fetch();

  // updates every members "special roles"
  guild.members.cache.forEach(member => {
    updateMember(member);
  });
}