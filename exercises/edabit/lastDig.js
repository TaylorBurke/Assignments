// Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of (the last digit of a * the last digit of b) = the last digit of c. Check examples for explanation.

function lastDig(a, b, c) {
	
	let arrA = a.toString(10).split("").map(function(d){return parseInt(d)});
    let arrB = b.toString(10).split("").map(function(d){return parseInt(d)});
	let arrC = c.toString(10).split("").map(function(d){return parseInt(d)});

    let lastA = arrA[arrA.length -1];
    let lastB = arrB[arrB.length -1];
    let lastC = arrC[arrC.length -1];

    let arrLastAtimesLastB = (lastA * lastB).toString(10).split("").map(function(d){return parseInt(d)});
    let lastOfLastAtimesLastB = arrLastAtimesLastB[arrLastAtimesLastB.length -1];

    console.log(lastA, lastB, lastC, arrLastAtimesLastB, lastOfLastAtimesLastB)

    if (lastOfLastAtimesLastB == lastC) {
        return true;
    } 
    return false;

}

console.log(lastDig(25, 21, 125));

