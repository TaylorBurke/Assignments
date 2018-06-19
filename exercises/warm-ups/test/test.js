var assert = require("chai").assert;

var palindromeFinder = require("../palindrome.js");

var testCases = [
    "Star Rats!",
    "palindrome",
    "I madam, I made radio! So I dared! Am I mad?? Am I?!"
]

describe("Testing palindrome finder function", function(){
    it("case 0 should return true", function(){
        assert.isTrue(palindromeFinder(testCases[0]))
    });
    it("case 1 should return false", function(){
        assert.isNotTrue(palindromeFinder(testCases[1]))
    });
    it("case 2 should return true", function(){
        assert.isTrue(palindromeFinder(testCases[2]))
    });
})

