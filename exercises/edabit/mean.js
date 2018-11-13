// https://edabit.com/challenge/8zBhNfrQv7CWKvcx3


const array = [
    4,
    5,
    6,
    1,
    100.333
]


const mean = (arr) => {

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let sum = arr.reduce(reducer);
    let answer = sum / arr.length;
    let decAnswer = Math.round(answer * 1e2 ) / 1e2;
    return decAnswer
}

console.log(mean(array));