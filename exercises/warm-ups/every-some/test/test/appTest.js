let chai = require('chai');
let assert = chai.assert;
let returnBoolean= require('../app')
let returnBoolean1= require('../app')

describe("Given an array return true if some of the data types are the same", ()=>{
    it("should return true when it recieves an array with at least 2 of the same data types", ()=> {
        assert.equal(returnBoolean('arr'), true)
    })
})

