const {prefix} = require('../config.json');

module.exports = {
	name: 'ready',
	once: true,
  
	execute(client) {
    console.log('I am ready!');

		// Set the client user's activity
    client.user.setActivity(`${prefix}help`, { type: 'WATCHING'})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
	}
}