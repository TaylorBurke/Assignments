var readline = require('readline-sync')
var chalk = require('chalk')
var play = require('play');

var loot = ["Health Potion", 'AP Potion']

var Inventory = []


// // character creation  
// // walking  
// // running from a fight  
// // fighting  
// // enemy creation  
// // attacking enemy  
// // enemy attacking  
// // enemy dying (including dropping an item)  
// // character dying 

var classes = [chalk.red('Warrior: A master of weapons and fighting'), chalk.green('Hunter: A sly combatant relying on bows and daggers'), chalk.blue('Monk: servents of god who carry a staff and pursue justice'), chalk.magenta('Wizard: masters of the arcane, masters in all schools of magic'), chalk.red('Witchhunter: Hunters who rely on a mix of conjuration, illusion and bows to win there fights'), chalk.yellow('Battlemage: a combination of melee weapons and destruction magic to win your fights'), chalk.white('Paladin: Warriors who use healing and protection magic to heal themselves and vanquish the undead')]

function charCreation(name, job, hp, ap) {
    this.name = name;
    this.job = job;
    this.hp = hp;
    this.ap = ap;

}



function Enemies(title, hp, ap) {
    this.title = title;
    this.hp = hp;
    this.ap = ap;
}

var bandit = new Enemies('Bandit:', 100, 100)
var ogre = new Enemies('Ogre:', 100, 100)
var witch = new Enemies('Witch:', 100, 100)
var darkWizard = new Enemies('Dark Wizard:', 100, 100)
var cannibal = new Enemies('Cannibal:', 100, 100)


var ene = [bandit, ogre, witch, darkWizard, cannibal]

var enemy;




var names = readline.question(chalk.green("\n(As you approach the city gates, A old man blocks your path) Welcome to Dune City adventurer, here is a land of misfits and rebels. You must build your own way in this city if you seek to survive, Tell me your name: "))

var answers = readline.keyInSelect(classes, chalk.red("Thank you " + names + ". This is a rough place to survive, there are guards but they focus on protecting the king, you will have to know how to survive on your own, Do you have a class?: "))

if (answers == 0) {
    console.log(chalk.blue("\nThere are alot of warriors in Dune city, you should fit in fine"))
    var myCharacter = new charCreation(names, 'Warrior', 250, 120)
} else if (answers == 1) {
    console.log("\nA master of the hunt I see, there is plenty of work for those who cant be noticed")
    var myCharacter = new charCreation(names, 'Hunter', 170, 140)
} else if (answers == 2) {
    console.log("\n(The old man bows to you) Tread carefully monk, this is not the monastary where you grew up")
    var myCharacter = new charCreation(names, 'Monk', 20, 120)
} else if (answers == 3) {
    console.log("\nI see, Wizards are always in demand around here, though the king feels threatned by them")
    var myCharacter = new charCreation(names, 'Wizard', 150, 230)
} else if (answers == 4) {
    console.log("\nInteresting, I thought the remaining Witchhunters were killed in the Great hill massacare, blasted witches")
    var myCharacter = new charCreation(names, 'Witchhunter', 150, 200)
} else if (answers == 5) {
    console.log("\nBattlemages aren't as welcome here as they used to be, not since a band of them attacked a city a few years back. Just don't go around screaming what you do")
    var myCharacter = new charCreation(names, 'Battlemage', 170, 170)
} else if (answers == 6) {
    console.log("\nThe citizens here love a warrior of the light, you will find friends here")
    var myCharacter = new charCreation(names, 'Paladin', 200, 150)
}

console.log("\nWell im sure you can make your way around this city just fine, be sure to keep your guard up (The old man walks away)")
console.log(myCharacter.name + " Class: " + myCharacter.job + " hp: " + myCharacter.hp + " Ap: " + myCharacter.ap)


while (myCharacter.hp > 0 || myCharacter.ap > 0) {
    var moves = ['walk']
    var index = readline.keyInSelect(moves, chalk.blue("Shall we move foward? (Press w to walk)"))
    if (moves[index] = "walk") {
        var random = Math.floor(Math.random() * 3 + 1)
        if (random === 1) {
            fight()
        } else {
            console.log("No one has appeared")
        }
    }
}
//die()
//{break}


// walk()
// function walk(){
//     var moves = [chalk.green('walk')]
//     var index = readline.keyInSelect(moves, chalk.blue("Shall we move foward? (Press w to walk)"))
//         if(moves[index] = "walk"){
//             var random = Math.floor(Math.random()* 4 + 1)
//             if(random === 1){
//                  fight()
//             } else{
//                 walk()
//             }
//         }else{
//             myCharacter.hp = 0
//         }


//}

function run() {

    console.log('You ran away!')
}

function fight() {
    enemy = ene[Math.floor(Math.random(ene) * ene.length)];
    ene.splice(ene.indexOf(enemy), 1)
    while (enemy.hp > 0 && enemy.ap > 0) {
        var choices = ['Fight', 'Run', 'Inventory']
        var kite = readline.keyInSelect(choices, "\nAn enemy appears from the shadow looking to take your life, do you fight?")
        if (choices[kite] === 'Fight') {
            console.log("\nPrepare for battle")
            attackEnemy()
            enemyAttack()
            console.log(myCharacter.name + ": " + myCharacter.hp + "HP " + myCharacter.ap + "AP")
            console.log(enemy.title + " " + enemy.hp + "HP " + enemy.ap + "AP")
            if (myCharacter.hp <= 0) {
                die()
            }
        } else if (choices[kite] === 'Run') {
            var random = Math.floor(Math.random() * 2 + 1)
            if (random === 1) {
                { break; fight() }
                console.log('You have Escaped!')
            } else {
                console.log('Your Attempt at running failed')
            }
        } else if (choices[kite] === 'Inventory') {
            var inv = readline.keyInSelect(Inventory, 'Choose From your Inventory')
            if (Inventory[inv] === 'Health Potion') {
                myCharacter.hp + 50;
            } if (Inventory[inv] === 'AP Potion') {
                myCharacter.ap + 50;
            }
        }
    } if (enemy.hp <= 0) {
        enemyDie()
    }
}








function attackEnemy() {
    var random1 = Math.floor(Math.random() * 3) + 1
    var random2 = Math.floor(Math.random() * 15 + 10)
    if (random1 === 2) {
        console.log("\nYou have hit the enemy, it was super effective")
        enemy.hp -= random2
        myCharacter.ap -= Math.floor(random2 / 5)
        play.sound('Decapitation Head Fall Off-SoundBible.com-1529852007.wav')
    } else {
        console.log("\nYou Miss!")
    }
}


function enemyAttack() {
    random = Math.floor(Math.random() * 4) + 1
    random1 = Math.floor(Math.random() * 15 + 10)
    if (random === 1) {
        myCharacter.hp -= random1
        enemy.ap -= Math.floor(random1 / 5)
        play.sound('Swords_Collide-Sound_Explorer-2015600826.wav')
        console.log("You've been hit")
    } else {
        console.log("They Miss")
    }
}

function die() {
    console.log("You are dead....GAME OVER")
    play.sound('Demon_Your_Soul_is_mine-BlueMann-1903732045.wav')

}

function enemyDie() {

    myCharacter.hp += 40;
    myCharacter.ap += 30;
    console.log(chalk.blue("\nEnemy defeated, you win"))
    var ran = loot[Math.floor(Math.random() * loot.length)]
    console.log(ran)
    Inventory.push(ran)
    play.sound('Short_triumphal_fanfare-John_Stracke-815794903.wav')
}