var Weapon = function(options) {
  this.name        = options.name;
  this.description = options.description;
  this.baseDamage  = options.baseDamage;
  this.sidedDie    = options.sidedDie;

  this.flags = [];

  return this;
};

Weapon.prototype.toString = function() {
  return this.name;
};

Weapon.prototype.strike = function(target) {
  var roll = Math.floor(Math.random()*this.sidedDie)+1;
  var base = this.baseDamage + roll;
  console.log(base);
  return target.receiveBlow(base);
};

module.exports = Weapon;
