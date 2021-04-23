const findAllCategories = require('../category/findAllCategories.js');
const List = require("collections/list");

module.exports = function(guild, sortedMemberRoles) {
  var addedCategories = new List();
  var nextRole;
  const categories = findAllCategories(guild.roles.cache.array());

  for (var i=0; i<categories.length; i++) {
    nextRole = sortedMemberRoles.find(next => next.position < categories[i].position && next.position != 0);

    if(nextRole && (addedCategories.length == 0 || nextRole.position > categories[i-1].position)) {
      addedCategories.add(categories[i]);
    }
  }

  return addedCategories.toArray();
}