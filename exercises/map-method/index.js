// https://coursework.vschool.io/array-map-exercises/

// 1
// function doubleNumbers(arr){
//     return arr.map(function(num){
//         return num * 2
//     })
// }

// 2
// function stringItUp(arr){
//     return arr.map(function(num){
//         return num.toString()
//     })
// }

// console.log(stringItUp([2, 5, 100]));

// 5

function makeStrings(arr){
    return arr.map(function(person){
        if (person.age >= 18) {
            return `${person.name} can go see THE MATRIX`
        } else {
            return `${person.name} is RESTRICTED (user.age = under)`
        }
    })
}

console.log(makeStrings([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]