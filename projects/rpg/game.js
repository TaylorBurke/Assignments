var rs = require("readline-sync");
var win = false;
var name = rs.question("Welcome! What's your name?");

var player = {
    name: name,
    hp: 100,
    items: [],
    enemiesKilled: 0
}

var Enemy = function(){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

checkForEnemy = function(arg){
 if(Math.floor(Math.random) > 3) {
    return arg; // this is not finished
 }
}

function genRandomEnemy(){
    var names = ["Goblin", "Ghost Skull", ""];
    var hp = 100;
    var attack = 10;

    return new Enemy(names(Math.floor(Math.random)) * 5)
}

// while(true) {

var isWalking = rs.question("press W to begin walking");

var enemy = genRandomEnemy();
    console.log("A wild" + Enemy + "appeared!");

    var choice = rs.keyInYN("Do you wish to fight?");
    if(choice){
        while (enemy.hp > 0 && player.hp > 0){
            console.log("the " +enemy.name + "strikes first!");
            player.hp -= enemy.attack;
            if (player.hp < 0) break;
            console.log("You strike the enemy. It's personal now.");
            enemy.hp -= player.attack;
            player.attack = genAttackPower();
            enemy.attack = genAttackPower();
        }
        if (player.hp < 0) {
            win = false;
            break;
        } else {
            console.log("You have slain " + enemy.name);
            if (player.enemiesKilled > 2){
                win = true;
            }
        }
    }
            //  run or fight
            //   if fight start fight sequence
            //        check hit points of the player and enemy to see who wins
            //             if player hp is < 1 break out of loop and lose
            //             if enemy hp is < 1 earn an item, add to kills, and continue to top of loop
            //        if enemy kills > 2 break loop and win the game
            //   else continue to top of loop

              if(win) {
                  console.log("You win!")
              } else {
                  console.log("You lose!")
              }
            