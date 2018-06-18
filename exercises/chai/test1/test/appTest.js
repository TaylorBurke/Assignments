const assert = require('chai').assert;

const sayHelloResult = require('../app').sayHello();


describe('App', function(){
    describe('sayHello()', function(){
        it('app should return hello', function(){
                assert.equal(sayHelloResult, 'hello');
            })
            it('sayHello should return string type', function(){
                assert.typeOf(sayHelloResult, "string");
            })
    })
   
});

