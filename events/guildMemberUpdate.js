const updateMember = require('../functions/member/updateMember.js');

module.exports = {
	name: 'guildMemberUpdate',

	execute(oldMember, newMember) {
    if(!oldMember.roles.cache.equals(newMember.roles.cache)) {
      updateMember(newMember); 
    }
  }
}