let chai = require("chai");
let assert = chai.assert;
let verifyIp = require('./app');

describe("Given a string, write a function that determines whether it is a valid IP address", ()=>{
    it ("should return true when it receives a valid ip address", ()=>{
        assert.equal(verifyIp('3.15.233.0'), true)
    })
    it ("should return false when it receives invalid ip address", ()=>{
        assert.equal(verifyIp("aa.89.230.0"), false)
    })
    it ("should return false when it receives invalid ip address", ()=>{
        assert.equal(verifyIp("0.89..0"), false)
    })
})