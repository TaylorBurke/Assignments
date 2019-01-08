// rock paper scissors

const rockPaperScissors = (move) => {
    const computerMove = 
    Math.floor(Math.random() * Math.floor(3)) +1;

    if ( move === "rock" ) playerMove = 1;
    else if ( move === "scissors") playerMove = 2;
    else if (move === "paper") playerMove = 3;

    if (playerMove === 1 && computerMove === 3){
        return("The computer covered your rock with paper!")
    }
    else if (playerMove === 2 && computerMove === 1){
        return("The computer smashed your scissors with rock!")
    }
    else if (playerMove === 3 && computerMove === 2){
        return("The computer cut your paper with scissors!")
    }
    else if (playerMove === 1 && computerMove === 2){
        return("You smash the computer's scissors with your rock!")
    }
    else if (playerMove === 2 && computerMove === 3){
        return("You cut the computer's paper with your scissors!")
    }
    else if (playerMove === 3 && computerMove === 1){
        return("You cover the computer's rock with your paper!")
    }
    else return("You both threw the same move, it's a draw!")
    };

console.log(rockPaperScissors("scissors"));