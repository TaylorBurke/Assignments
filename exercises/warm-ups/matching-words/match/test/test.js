const assert = require("chai").assert;

const matchWords = require("../match.js");

const testCase = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

const expected = ["pull", "the", "lever", "on", "far", "right"]

describe("Testing matching words", function(){
    it("case should return message", function(){
        assert.deepEqual(matchWords(testCase), expected)
    });
})

