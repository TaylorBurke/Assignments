// https://edabit.com/challenge/arzsQcGsstJxHAnGi

const array = [9, 2, 2, 5];


function isAvgWhole(arr) {

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

	return Number.isInteger(arr.reduce(reducer, 0)/arr.length)
}

console.log(isAvgWhole(array))