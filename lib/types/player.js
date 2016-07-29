var Player = function (options) {
  this.name     = options.name;
  this.room     = options.room;
  this.mainHand = options.mainHand;
  this.health   = options.health;

  this.hitsTaken = [];

  return this;
};

Player.prototype.toString = function() {
  return [
    this.name,
    'is here.'
  ].join(' ');
};

Player.prototype.details = function() {
  return [
    this.name,
    'has a',
    this.mainHand,
    'and isn\'t afraid to use it.'
  ].join(' ');
};

Player.prototype.lookRoom = function() {
  if (!this.room) {
    return;
  }
  return this.room.fromPerspective(this);
};

Player.prototype.look =function(target) {
  if (!target) {
    return this.lookRoom();
  }

  return target.details();
};

Player.prototype.wield = function(weapon) {
  this.mainHand = weapon;
};

Player.prototype.attack = function(target) {
  if (!this.mainHand) {
    return;
  };

  var damage = this.mainHand.strike(target);

  return damage;
};

Player.prototype.receiveBlow = function(damage) {
  this.hitsTaken.push(damage);

  if (this.currentHealth() < (this.health*0.2)) {
    console.log('oh shit');
  }

  if (this.currentHealth() < 1) {
    console.log(this.name + ' is DEAD!');
  }

  return damage;
};

Player.prototype.currentHealth = function() {
  return this.health - this.hitsTaken.reduce(function(acc, hit) {
    return acc + hit;
  }, 0);
};

module.exports = Player;
