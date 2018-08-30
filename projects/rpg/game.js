const rs = require("readline-sync");

var alive = true;
var distance = 0;

// Intro

console.log("...");
console.log("You find yourself on a strange planet... Gazorpazorp!!\n");
console.log("You see a friendly looking anthropomorphic ball of Goop!\n");

// player constructor class

var Player = function (name) {
    (this.name = name),
        (this.hp = 150),
        (this.atk = Math.floor(Math.random() * 10) + 30);
};

// Player name input

var man = new Player("Human");
var playerName = rs.question('"What do they call you, stranger?" the gloop squirts in suprisingly good English. (enter your name now)\n');
console.log(`\n"They call me ${playerName}" you reply. "I am a ${man.name} from the planet Earth. I would like to see if I can find a way home..." \n \n "Oh! Well, the spaceport is that way," it responds. You trail off in the direction his noodley appendage points.`);

//Enemy constructor

var Enemy = function (name) {
    (this.name = name),
        (this.hp = 100),
        (this.atk = Math.floor(Math.random() * 10) + 15);
};

var enemyNames = ["Aggressive Robot", "Snail Thing", "Fugly Centipede"];

var itemOutput = [
    { name: "slim jim", heal: 25 },
    { name: "mango", heal: 50 },
    { name: "milk", heal: 75 }
];

// move through game

while (alive) {

    // conditions to compvare the quest

    if (distance > 9) {
        console.log("You made it to the spaceport! In exchange for your indentured servitude a smuggler has agreed to take you back to earth.");
        break;
    }
    var userInput = rs.question("Press 'w' to walk forward\n", {
        limit: "w",
        limitMessage: "don't just stand there, walk!"
    });
    var distance = distance + 1;
    var chance = Math.floor(Math.random() * 10);
    if (chance <= 3.3) {
        continue;
    } else if (chance >= 3.3) {
        var enemyFound = new Enemy(
            enemyNames[Math.floor(Math.random() * enemyNames.length)]
        );
        console.log(`You have encountered ${enemyFound.name}!\n`);
    }


    // decide if you want to fight or flee

    var fightOrFlight = ["Dome his ass!", "gtfo!\n"];
    var fOFSelection = rs.keyInSelect(fightOrFlight, "What will you do?\n");

    if (fightOrFlight[fOFSelection] === fightOrFlight[0]) {
        while (enemyFound.hp > 0 && man.hp > 0) {
            enemyFound.hp -= man.atk;
            console.log("You strike the monstrosity with your fist!\n");
            man.hp -= enemyFound.atk;
            console.log(`${enemyFound.name} assails you! Your health is ${man.hp}\n`);
            if (man.hp <= 0) {
                var alive = false;
                console.log(`${enemyFound.name} has prevailed. You dead!\n`);
                break;
            }
            if (enemyFound.hp <= 0) {
                console.log(`You have slain ${enemyFound.name} \n`);
                var loot = itemOutput[Math.floor(Math.random() * itemOutput.length)];
                man.hp += loot.heal;
                if (man.hp > 150) {
                    man.hp = 150;
                }
                console.log(`You snarf down the ${loot.name} ${enemyFound.name} dropped and your health is now ${man.hp}!\n`);
            }
        }
    } else if (fightOrFlight[fOFSelection] === fightOrFlight[1]) {
        var escapeChance = Math.floor(Math.random() * 10);
        if (escapeChance <= 6.5) {
            console.log(
                `Your feet begin to yeet as you retreat from ${enemyFound.name}'s glare! Your pussy-ass lives another day!`
            );
            continue;
        } else {
            console.log(`As you turn to flee you trip on a space rock and ${
                enemyFound.name
                }'s alien form consumes you. \n`);
            break;
        }
    } else {
        console.log(
            `You somehow managed to escape Gazorpazorp!\n`
        );
        break;
    }
    continue;
}
