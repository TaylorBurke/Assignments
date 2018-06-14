
// the purpose of this app is to calculate the total bounty of 3 inputs


const goomba = Number(document.getElementById("bounty").value);
const bomb = Number(document.getElementById("bounty1").value);
const cheep = Number(document.getElementById("bounty2").value);

document.getElementById("submit").addEventListener("click", calculateBounty);

function calculateBounty(goomba, bomb, cheep){

    var coins = (goomba * 5) + (bomb * 7) + (cheep * 11);

    return(coins);
}

console.log(calculateBounty())

