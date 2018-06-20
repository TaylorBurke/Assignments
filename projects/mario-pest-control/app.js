
// the purpose of this app is to calculate the total bounty of 3 inputs




document.querySelector("button").addEventListener("click", calculateBounty);

function calculateBounty(){
    var goomba = document.getElementById("bounty").value;
    var bomb = document.getElementById("bounty1").value;
    var cheep = document.getElementById("bounty2").value;

    var coins = (goomba * 5) + (bomb * 7) + (cheep * 11);


    document.querySelector("section").innerHTML = "You earned " + coins + " coins!";
}


