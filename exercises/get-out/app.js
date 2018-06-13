
var readlineSync = require('readline-sync');

var options1 = ["Join the fight", "Run"]

if(readlineSync.keyInSelect(options1, "You wake up in a dark void. Gunshots are heard all around you. What do you do?")!==0){
    console.log("As you run away from the scary man, a bullet enters your skull. You dead.")
} else {
    console.log("Feeling your pockets you find a few bullets, and a quick survey of the ground reveals an old six-shooter. Quickly you load your rounds and head into the direction of the fight.")
}

var options2 = ["blast the door handle with your gun", "try and open the door", "put your hand in the hole"]

if(readlineSync.keyInSelect(options2, "As you approach the fight you see dead bodies everywhere. They must have killed themselves. You also see a door, and a mysterious hole. What do you do?")==0){
        console.log("Smart move, looks like you might survive this after all")
} else if(options2==1){
        console.log("the door is locked")
} else if(options2==2){
        console.log("You feel a syringe enter your skin. You are dead")
}