// https://coursework.vschool.io/game-of-threes/

// const recurse = (x) => {
//     if (x < 1) return `Loop finished, x = ${x}`;
//     console.log(x);

//     //Recursion
//     return recurse(x-1);
// }

// recurse(10);



const gameOfThree = (n, counter = 0) => {
    if (n === 1) return counter;



    if (n % 3 === 0) {
        return gameOfThree(n / 3, counter +1);
    } else {
        if((n + 1) % 3 === 0){
            return gameOfThree((n + 1) / 3, counter +1);
        } else {
            return gameOfThree((n - 1) / 3, counter + 1);
        }
    }
}

console.log(gameOfThree(5));