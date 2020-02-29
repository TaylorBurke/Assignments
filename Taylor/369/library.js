const getDouble = (number) => number * 2

const getHalf = (number) => number /2

const getSum = (total, num) => total + num

const getLengthOfDigit = (num) => {
    let numToArray = (""+num).split("").map(function(t){return parseInt(t)})
    let digits = numToArray.filter(i => typeof i === "number")
    return digits.length;
}

const getNumericReduction = (num) => {
    let numToArray = (""+num).split("").map(function(t){return parseInt(t)})
    let digits = numToArray.filter(i => i)
    let output = digits.reduce(getSum, 0)

    getLengthOfDigit(output) > 1 ? output = getNumericReduction(output) : ""
    return output
}

// startingNum should be a number 1 through 9

// direction argument should be a string "f" (forward) or "r" (reverse)

// iterations that are higher than 45 will tend towards rounding errors 
// (when the direction is reverse this happens around 20 iterations)

const doVortex = (startingNum, iterations, direction = "f") => {
    let functionInput;
    direction === "f" ? functionInput = getDouble : functionInput = getHalf
    let nextNum = startingNum;

    for (let i = 0; i <= iterations; i++){
        // 14 = 5
        let printNum = getNumericReduction(nextNum);
        console.log(`${i}: ` + printNum)
        // 14 = 28
        nextNum = functionInput(nextNum)
    }

}

doVortex(8, 25)
