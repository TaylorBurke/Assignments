var assert = require("chai").assert;

var findMissingNo = require("../index.js");

var testCase0 = [2,1,3,5]
var testCase1 = [12,10, 9]
var testCase2 = [-3,0,-2,3,2,-1]

var expected = 4
var expected1 = 11
var expected2 = 1



describe("Testing missingNo finder function", function(){
    it("case 0 should return 4", function(){
        assert.equal(findMissingNo(testCase0), expected)
    });
    it("case 1 should return 11", function(){
        assert.equal(findMissingNo(testCase1), expected1)
    });
    it("case 2 should return 1", function(){
        assert.equal(findMissingNo(testCase2), expected2)
    });
})

