const {categoryHexColor} = require('../../config.json');

module.exports = function(message, name) {
  var space = " ";
  for(var i=0; i<Math.floor((30-name.length)/2); i++) {
    space = space + " ";
  }

  message.guild.roles.create({
    data: {
      name: '⁣ ' + space + name + space + ' ⁣',
      color: categoryHexColor,
      permissions: [],
    },
    reason: `${message.member.name} wanted to create a new color-role`,
  })
  .then(created => console.log(`Created category ${created.name} in ${message.guild.name}`))
  .catch(console.error);
}