var Room = function (options) {
  this.name        = options.name;
  this.description = options.description;

  this.players = [];

  return this;
};

Room.prototype.exit = function(player){
  if (!player.room) {
    return;
  }
  var room = player.room;
  var index = room.players.indexOf(player);
  room.players.splice(index, 1);
};

Room.prototype.enter = function(player) {
  this.exit(player);
  this.players.push(player);
  player.room = this;
};

Room.prototype.fromPerspective = function(player) {
  return [
    this.name,
    '--------',
    this.description,
    '',
    this.players.filter(function(person) {
      return player != person;
    }),
    '',
    ''
  ].join('\n');
};

module.exports = Room;
