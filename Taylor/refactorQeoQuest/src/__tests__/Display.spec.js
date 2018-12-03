const objectThing = {
    test: 1,
    show: 0,
};

describe('the objectThing', ()=>{
    it('should have a test property that is truthy', ()=>{
        expect(objectThing.test).toBeTruthy()
    });
    it('should have a show property that is falsy', ()=>{
        expect(objectThing.show).toBeFalsy()
    });
});