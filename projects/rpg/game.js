var readline = require('readline-sync');
var chalk = require('chalk');

var Enemies = (arg) => {
    //create object class
}

var items = [
    milk,
    mechSuit,
    kinkyWhip
]

milk = (arg) => {
    // act on player object to reset HP value
    return arg
},

// milk: restore HP
// mech suit: double HP
// kinky whip: double attack power / or you attack first?

var inventory = []
// create char

// wild creature appears
// engage enemy
    // run from fight

// kill enemy get random item

// break loop if hp < 0





const rs = require("readline-sync");

var alive = true;

//Introduction to game
console.log("Welcome to the Defence of the Ancients!\n");

//Player name input
var Player = function (name) {
  (this.name = name),
    (this.hp = 100),
    (this.atk = Math.floor(Math.random() * 10) + 20);
};
var dk = new Player("Dragon Knight");
var playerName = rs.question("Please input name\n");
console.log(`${playerName} spawned as ${dk.name} at the Radiant fountain.`);

//Enemy constructor
var Enemy = function (name) {
  (this.name = name),
    (this.hp = 100),
    (this.atk = Math.floor(Math.random() * 10) + 15);
};

var enemyNames = ["Invoker", "Huskar", "Venomancer", "Axe", "Puck"];

var itemOutput = [
  { name: "tango", heal: 25 },
  { name: "mango", heal: 50 },
  { name: "cheese", heal: 100 }
];

//Initiate walking with button 'w'
while (alive) {
  var userInput = rs.question("Press 'w' to walk forward\n", {
    limit: "w",
    limitMessage: "That's not a w!"
  });

  var chance = Math.floor(Math.random() * 10);
  if (chance <= 3.3) {
    continue;
  } else if (chance >= 3.3) {
    var enemyFound = new Enemy(
      enemyNames[Math.floor(Math.random() * enemyNames.length)]
    );
    console.log(`You have encountered ${enemyFound.name}!\n`);
  }

  //Error here.
  var fightOrNot = ["Fight!", "Back!\n"];
  var fightOrBack = rs.keyInSelect(fightOrNot, "What will you do?\n");

  if (fightOrNot[fightOrBack] === fightOrNot[0]) {
    while (enemyFound.hp > 0 && dk.hp > 0) {
      enemyFound.hp -= dk.atk;
      console.log("You striked the enemy with your quelling blade!\n");
      dk.hp -= enemyFound.atk;
      console.log(`${enemyFound.name} striked you!\n`);
      if (dk.hp <= 0) {
        var alive = false;
        console.log(`${enemyFound.name} killed you. You are dead!\n`);
        break;
      }
      if (enemyFound.hp <= 0) {
        console.log(`You killed ${enemyFound.name} \n`);
        var loot = itemOutput[Math.floor(Math.random() * itemOutput.length)];
        dk.hp += loot.heal;
        if (dk.hp > 100) {
          dk.hp = 100;
        }
        console.log(`You consumed ${loot.name} and your HP is now ${dk.hp}!\n`);
      }
    }
  } else if (fightOrNot[fightOrBack] === fightOrNot[1]) {
    var escapeChance = Math.floor(Math.random() * 10);
    if (escapeChance <= 5.5) {
      console.log(
        `You managed to juke out of ${enemyFound.name}'s sight! Wellplayed!`
      );
      continue;
    } else {
      console.log(`As you tried to escape with a teleport scroll, ${
        enemyFound.name
        }'s team member Disruptor managed
        to cast "Glimpse" which caused you to teleport back to the enemy's position and died!\n`);
      break;
    }
  } else {
    console.log(
      `You disconnected from the game and were reported by your team. Enjoy your VACation!\n`
    );
    break;
  }
  continue;
}