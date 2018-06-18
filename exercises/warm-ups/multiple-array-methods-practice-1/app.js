// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

// https://coursework.vschool.io/multiple-array-methods-practice-1/

function sortedByAge(arr){
    var sorted = arr.sort(function (person1, person2){
        return person1.lastName.localeCompare(person2.lastName);
    })

    let filteredAndSorted = sorted.filter(function(person){
        return person.age >= 18;
    })
    return filteredAndSorted;
}

var people = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];  

var animals = [  
    {
      firstName: "Rex",
      lastName: "Dog",
      age: 117
    },{
      firstName: "Crystal",
      lastName: "Cat",
      age: 112
    },{
      firstName: "Sammy",
      lastName: "Seal",
      age: 78
    },{
      firstName: "Bo",
      lastName: "Beaver",
      age: 13
    },{
      firstName: "Vasily",
      lastName: "Bird",
      age: 27
    }
  ];  

// until we pass in the argument 'people' the method can be called on any array with the same values (name and age)

console.log(sortedByAge(people));
console.log(sortedByAge(animals));
