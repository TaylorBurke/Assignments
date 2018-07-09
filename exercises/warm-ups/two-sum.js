// https://coursework.vschool.io/two-sum/

let chai = require('chai');
let assert = chai.assert; 


// // my first code

// const dataSet = [1, 2, 3, 4];
// const target = 4;

// const twoSum = (set, tar) => {
//     for (let i = 0; i < set.length; i++) {
//         for (let j = 1; j < set.length; j++) {
//             if ((set[i]) + (set[j]) === tar) {
//                 return ` your set is ${[set.indexOf(set[i]), set.indexOf(set[j])]} and the target is ${tar}`;
                
//             } 
//         } return "wut"
//     }
// }

// console.log(twoSum(dataSet, target));

// return [0, 2] because 1 + 3 = 4

//code as done with the class

const twoSum = (arr, int) => {

    for (let i = 0; i < arr.length; i ++) {
        for (let j = i + 1; i < arr.length; j++) {
            if(arr[j] + arr[i] === int) {
                return [i, j]
            }
        }
    }

}

const testCases = [
    {
        arr: [2, 8, 3, 7],
        int: 10
    }
]

// write test

describe("Testing twoSum function", () => {
    it ("should return [0, 1]", () => {
        assert.deepEqual(twoSum(testCases[1].arr, testCases[1].int), [0, 1])
    })
})

