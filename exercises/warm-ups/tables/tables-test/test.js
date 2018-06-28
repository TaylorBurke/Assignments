const assert = require("chai").assert;

const genMulTable = require("../table.js");

const expected = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
    [4, 8, 12, 16, 20],
    [5, 10, 15, 20, 25]
];

describe("Multiplication Table Generator", () => {
    it("should return an array of arrays representing a multiplication table", () => {
        assert.deepEqual(genMulTable(), expected);
    })
})

