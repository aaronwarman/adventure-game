(function() {
  var Player = require('./lib/types/player');
  var Room   = require('./lib/types/room');
  var Weapon = require('./lib/types/weapon');

  var axe = new Weapon({
    id: 1,
    name: 'Small axe',
    baseDamage: 12,
    sidedDie: 6
  });

  var sword = new Weapon({
    id: 2,
    name: 'Long sword',
    baseDamage: 10,
    sidedDie: 10
  });

  var gelsey = new Player({
    id: 1, 
    name: 'Gelsey the Brave',
    mainHand: axe,
    health: 100
  });

  var aaron  = new Player({
    id: 2, 
    name: 'Aaron the Awesome',
    mainHand: sword,
    health: 100
  });

  var alley  = new Room({
    name: 'A dark alley',
    description: 'The sunlight barely penetrates here. The walls are covered in a dark substance.'
  });

  var market = new Room({
    name: 'A busy marketplace',
    description: 'There are people all around you bustling about, attening their daily business. You can hear the sounds of metal being hammered and smell food being cooked.'
  });

  market.enter(aaron);

  alley.enter(gelsey);
  console.log(gelsey.look());

  market.enter(gelsey);
  console.log(gelsey.look());

  console.log(aaron.look(gelsey));
  console.log(gelsey.look(aaron));

  console.log('A fight breaks out!');

  while (
      gelsey.currentHealth() > 0 &&
      aaron.currentHealth() > 0 
      ) {
        console.log(aaron.attack(gelsey));
        console.log(gelsey.attack(aaron));
      }

}());

