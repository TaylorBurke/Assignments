// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

let array = [1, -2, 3, 4];




function getAbsSum(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        newArr.push(Math.abs(arr[i]))
    }

    var filterArray = newArr.reduce(reducer);

    return filterArray
}


const array1 = [1, -2, 3, 4];


const reducer = (accumulator, currentValue) => (accumulator) + currentValue



console.log(getAbsSum(array));