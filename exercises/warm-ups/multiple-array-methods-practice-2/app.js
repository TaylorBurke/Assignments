var dogOwners = [  
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    }, 
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    }, 
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    }, 
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    }, 
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
]
var dogNamers = [  
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

function sortedDogOwners(arr) {

    // sort array by age

sortedByAge = function(){arr.sort(function(person1, person2){
    return person1.age - person2.age;
})
    // filter the sorted array
    return sortedByAge.filter(function(person){
        // check if person.pet has dog
        return person.pets.includes("dog");
    })

}
}

function dogNames(arr) {

    // check for age

    var filteredByAge = arr.filter(function(person){
        return person.age > 20;
    })

    // check if they have nicknames
        return filteredByAge.reduce(function(accumulator, person){
            // check for nicknames
            // check for at least one dog
            var hasNicknames = person.pets.every(function(pet){
                return pet.nickNames.length;
            });
            var hasADog = person.pets.some(function(pet){
                return pet.type === "dog";
            });
            if (hasNicknames && hasADog) {// get names and convert them to li's (use map)
                var liTags = person.pets.map(function(pet){
                    return "<li>" + pet.name + "<li>";
            });
                return accumulator.concat(liTags);
            } else {
                return accumulator;
            }
        }, [])

    }


sortedDogOwners(dogOwners);
dogNames(dogNamers);







module.exports = dogNames;
