const findColorRole = require("./findColorRole.js")

module.exports = function(username, position, baseRole) {
  // console.log(`BOT ROLE POSITION:  ${botRole.position}`); // FIXBUG: doesn't change => if more then one role is created, it doesn't get placed at the right position

  if(!findColorRole(baseRole)) {
    baseRole.guild.roles.create({
      data: {
        name: baseRole.name + baseRole.hexColor,
        color: baseRole.color,
        permissions: [],
        position: position,
      },
      reason: `${username} wanted to create a new color-role`, 
    })
    .then(created => console.log(`Created color-role ${created.name}`))
    .catch(console.error);
    return true;
  }
  
  return false;
}