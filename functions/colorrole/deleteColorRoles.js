module.exports = function(roles) {
  roles.forEach(role => {
    if(role.name.includes('#')) {
      role.delete() // FIXBUG add reason
      .then(deleted => console.log(`Deleted role ${deleted.name}`))
      .catch(console.error);
    }
  });
}