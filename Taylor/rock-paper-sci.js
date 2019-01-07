// rock paper scissors

const rockPaperScissors = (move) => {
    const computerMove = 
    Math.random() * Math.floor(3);
    console.log(computerMove);

    const playerMove = (move) => {
    if ( move === "rock" ) return 1;
    else if ( move === "scissors") return 2;
    else if (move === "paper") return 3;
    }
    console.log(playerMove(move));

    };

console.log(rockPaperScissors("rock"));