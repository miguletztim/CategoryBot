const createCategory = require('../../functions/category/createCategory.js');
module.exports = {
  name: 'createcategory',
  description: 'Creates a category',
  usage: '<name>',
  guildOnly: true,
  args: true,
  
  execute(message) {
    // FIXBUG Make the code prettier
    var args = message.content.split(" "); // FIXBUG copies command
    args.shift();
    const name = args.join(" ");

    createCategory(message, name);
  }
}