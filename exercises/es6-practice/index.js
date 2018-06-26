// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators-2/
// https://scrimba.com/g/gintrotoes6

// function add(nums) {
//     console.log(nums);
// }

// add(4, 5, 6, 8);

// function add(...nums) {
//     let total = nums.reduce((x, y) => x + y);
    
//     console.log(total);
// }

// add (4, 5, 7, 8, 12);


// function collectAnimals(...others) {  
   
//     return others;
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

// let example1 = [{
//     firstname: "daylor"

// }];

// let example2 = [...example1]

// console.log(example2);

// function addressMaker(address) {
//     const {city, state} = address;
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };
//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
// }

// addressMaker({city: 'Austin', state: 'Texas'});

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

let [firstFav, secondFav, thirdFav, fourthFav, lastFav] = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

console.log(`My top 3 favorite things are ${firstFav}, ${secondFav}, and ${thirdFav}!`);