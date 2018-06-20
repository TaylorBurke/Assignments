var assert = require("chai").assert;

var sortedDogOwners = require("../app.js");
var dogNames = (require("../app.js"));

// var testCases = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47,
//         pets: ["dog", "cat"]
//     }, 
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12,
//         pets: ["dog"]
//     }, 
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78,
//         pets: ["cat", "parrot"]
//     }, 
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 13,
//         pets: ["cat", "parrot", "dog"]
//     }, 
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27,
//         pets: ["dog"]
//     }
// ];

// var expected = [
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12,
//         pets: ["dog"]
//     }, 
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 13,
//         pets: ["cat", "parrot", "dog"]
//     }, 
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27,
//         pets: ["dog"]
//     },
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47,
//         pets: ["dog", "cat"]
//     }
// ];

// //create test
// describe("Testing dogOwner function", function(){
//     it("should return array of dog owners sorted by age", function(){
//         assert.deepEqual(sortedDogOwners(testCases), expected)
//     })
// });


var testCases2 = [  
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

var expected2 = ['<li>Alfred</li>',
'<li>Charles</li>',
'<li>Bark Obama</li>', 
'<li>Christopher George Latore Wallace</li>',
'<li>Morty Jr.</li>', 
'<li>Snuffels</li>'];

//create test
describe("Testing dogNames function", function(){
    it("should return array of dog names", function(){
        assert.deepEqual(dogNames(testCases2), expected2)
    })
});