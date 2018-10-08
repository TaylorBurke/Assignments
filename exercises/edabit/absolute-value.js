// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

let array = [1, -2, 3, 4];




function getAbsSum(arr) {
    var filterArray = arr.reduce(reducer);

    return filterArray
}


const array1 = [1, -2, 3, 4];


const reducer = (accumulator, currentValue) => {return (Math.abs(accumulator) + currentValue)}



console.log(getAbsSum(array));