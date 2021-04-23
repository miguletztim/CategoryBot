module.exports = function(roles) {
  var highest = roles[0].position;

  for(var i = 1; i<roles.length; i++) {
    if(roles[i].position > highest) highest = roles[i].position;
  }

  return highest;
}