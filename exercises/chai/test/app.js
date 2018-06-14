var assert = function (actual, expected) {
    if (actual === expected) {
        console.log({
            type: "Success",
            details: {
                actual: actual,
                expected: expected
            }
        })
    } else {
        throw {
            type: "Fail",
            details: {
                actual: actual,
                expected: expected
            }
        }
    }
}

function checkForValue(arr, item) {
    return arr.includes(item);
}

var testCases = [
    {arr: [1, 2, 3, 4, 5], item: 6},
    {arr: [6, 7, 8, 9, 10], item: 8}
]

assert( checkForValue(testCases[0].arr, testCases[0].item), false);
assert( checkForValue(testCases[0].arr, testCases[0].item), true);

var describe = function(message, testFunc) {
    console.log(message);
        try {
            testFunc();
        } catch (err) {
            console.log(err);
        }

}

describe("Testing checkForValue", function() {
    assert(checkForValue(testCases[0].arr, testCases[0].item), false)
})