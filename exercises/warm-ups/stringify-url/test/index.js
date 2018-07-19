let chai = require('chai');
let assert = chai.assert;
let { stringifyUrl, objectifyQuery } = require('../stringify.js')

const testCasesStringify = [
    {
        url: 'www.google.com/monkey',
        query: {
            color: 'black',
            species: 'howler'
        }
    }
]

const testCasesObjects = [
    'www.google.com/monkey',
    'www.google.com/monkey?color=black&species=howler'
]

describe("test stringifyUrl", () => {
    it("should return a url with parameters added and seperated by signs", () => {
        assert.equal(stringifyUrl(testCasesStringify[1].url, testCasesStringify[1].query), true)
    });
})

describe("test objectifyQuery", () => {
    it('should return a query object with keyvalue pairs', () => {
        assert.deepEqual(objectifyQuery(testCasesObject[0]), {
            color: 'black',
            species: 'howler'
        });
        it('should return an empty query object', () => {
            assert.deepEqual(objectifyQuery(testCasesObjects[1]), {});
        })
    })
})
