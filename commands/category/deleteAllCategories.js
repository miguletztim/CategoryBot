const deleteAllCategories = require('../../functions/category/deleteAllCategories.js');

module.exports = {
  name: 'deleteallcategories',
  aliases: ['deleteeverycategory'],
  description: 'Deletes all categories',
  guildOnly: true,
  cooldown: 30,

  execute(message) {
    deleteAllCategories(message.guild.roles.cache.array())
  }
}