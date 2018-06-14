var rs = require("readline-sync");

var name = rs.question("Welcome! What's your name?");

var player = {
    name: name;
    hp: 100;
    items: [];
    enemiesKilled: 0;
}

var Enemy = function(){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

function checkForEnemy(){

}

function genRandomEnemy(){
    var names = ["Goblin", "Ghost Skull", ""];
    var hp = 100;
    var attack = 10;

    return new Enemy(na,es[Math.random() * )
}



while(true) {

var isWalking = rs.question("press W to begin walking");
 // see whether theres an enemy
     // if false continue looping
         // if true generate enemy
             // run or fight
              // if fight start fight sequence
                   // check hit points of the player and enemy to see who wins
                        // if player hp is < 1 break out of loop and lose
                        // if enemy hp is < 1 earn an item, add to kills, and continue to top of loop
                   // if enemy kills > 2 break loop and win the game
              // else continue to top of loop

              if(win) {
                  console.log("You win!")
              } else {
                  console.log("You lose!")
              }
            }