// both tests should return passing

const chai = require('chai');
const assert = chai.assert;
const nuclearFamily = require('./balance-parentheses');

describe("when given a string it should return true if every opening parenthesis has a closing parenthesis.", ()=> {
    it("should return true if parents are completed", ()=> {
        assert.isTrue(nuclearFamily("()()()"))
    })
    it("should return false if parents are borked", () => {
        assert.isFalse(nuclearFamily(")())"))
    })

})
