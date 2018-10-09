// https://edabit.com/challenge/gdmrXxEej2fPZtF4S


// REACTO

// Respond - 2 dimensional array and return a single dimensional array sorted in a spiral order - upmost array left to right, then the next array starting from right and working left.

// Examples - [[1, 2], [4, 3]] => [1, 2, 3, 4]

// Examples - [[1, 2, 3],
//            [8, 9, 4],
//            [7, 6, 5]]




// Approaches - arr.length for each line
// what if we used an i and j for nested for loops?


// Code

// Time Complexity

// Optimization
// console.log(array = [[1,2],[4,3]]);

const array2 = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
];

const arr3 = [
    [1, 4, 3, 9],
    [2, 5, 7, 1],
    [8, 6, 2, 3],
    [4, 5, 9, 1]
]

const arr3Ans = [1, 4, 3, 9, 1, 3, 1, 9, 5, 4, 8, 2, 5, 7, 2, 6]

// create some helper methods

const getLastDigit = (arr) => arr.map(el => el.pop());
const getLastArray = (arr) => arr.pop().reverse();

const getFirstDigit = (arr) => arr.map(el => el.shift());
const getFirstArray = (arr) => arr.shift();


// we need to slice these indices off

const spiralSort = (arr) => {
    let answer = [];
    answer.push(getFirstArray(arr));
    answer.push(getLastDigit(arr));
    answer.push(getLastArray(arr));
    answer.push(getFirstDigit(arr));
    return answer
}

// console.log(spiralSort(array));
console.log('returns =>', spiralSort(arr3));
console.log('answer => ', arr3Ans)
// console.log(getFirstDigit(Array2).reverse());