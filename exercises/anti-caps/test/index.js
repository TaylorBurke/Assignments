var assert = require("chai").assert;

// we will import our func here l8r
var antiCaps = require("../index.js");

var testCases = ["", "abc", "ABC", "abC"];

describe("Testing anti-caps", function(){
    it("should return empty string", function(){
        assert.equal(antiCaps(testCases[0]), "");
    })
    it("should return ABC", function(){
        assert.equal(antiCaps(testCases[1]), "ABC");
        })
    it("should return abc", function(){
        assert.equal(antiCaps(testCases[2]), "abc");
        })
    it("should return abC", function(){
        assert.equal(antiCaps(testCases[3]), "ABc");
    })
})
