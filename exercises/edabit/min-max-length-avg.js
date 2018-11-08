// https://edabit.com/challenge/gpozv9DbFqrHDmSQZ

array = [4, 5, -1, 5, 3, 1, 7, 3, -3];

function minMaxLengthAverage(arr) {

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = arr.reduce(reducer);


    const high = Math.max(...arr);
    const low = Math.min(...arr);
    const sequenceLength = arr.length;
    const avg = total / sequenceLength;

    const answer = [low, high, sequenceLength, avg];

    return answer;
}

console.log(minMaxLengthAverage(array));