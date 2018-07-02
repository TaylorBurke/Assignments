let chai = require('chai');
let assert = chai.assert;
let validateAddress = require('./app')

describe("Given a string, write a function that determines whether it is a valid IP address", ()=>{
    it("should return true when it recieves a valid ip address", ()=> {
        assert.equal(validateAddress('3.89.230.0'), true)
    })
    it("should return false the ip address contains letters", ()=> {
        assert.equal(validateAddress('aa.89.230.0'), false)
    })
    it('should return false if the ip address contains empty strings', ()=> {
        assert.equal(validateAddress('0.30..90'), false)
    })
})

