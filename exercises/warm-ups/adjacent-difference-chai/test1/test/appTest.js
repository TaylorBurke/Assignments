const assert = require('chai').assert;

const adjacent = require('../app.js');

array = ["hope", "you", "have", "a", "great", "day"]

describe('adjacent', function(){
   
        it('should return the longest 3 consecutive strings in an array', function(){
                assert.deepEqual(adjacent(array), ["hope", "you", "have"]);
            })
    });