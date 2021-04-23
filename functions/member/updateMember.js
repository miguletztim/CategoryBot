const List = require("collections/list");
const sortRoles = require('../general/sortRoles.js');
const findMemberColorRole = require('./findMemberColorRole.js');
const findMemberCategories = require('./findMemberCategories.js')
const isColor = require('../general/isColor.js')
const {categoryHexColor} = require('../../config.json');

module.exports = function(member) {
  var memberRoles = new List();
  const sortedOldMemberRoles = sortRoles(member.roles.cache.toArray())

  // Every "normal" role from bottom to top
  sortedOldMemberRoles.forEach(role => {
    if(!(role.name.includes('#') || role.hexColor === categoryHexColor)) {
      memberRoles.add(role);
    }
  })

  // Adds color role
  const colorRole = findMemberColorRole(memberRoles.toArray());
  if(colorRole && isColor(colorRole, memberRoles.toArray())) {
    memberRoles.add(colorRole);
  }

  // Adds category roles
  findMemberCategories(member.guild, memberRoles.toArray()).forEach(category => {
    memberRoles.add(category);
  });

  console.log(`Updated ${member.user.username} in ${member.guild}`)
  member.roles.set(memberRoles);
}