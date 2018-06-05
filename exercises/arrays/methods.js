

// from https://coursework.vschool.io/array-methods-exercise/


// console.log("fruit: ", fruit);  

var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables);  

// 1.
vegetables.splice(3, vegetables.length);

// 2.
fruit.shift();

// 3.
var findIndex = function(str){
   return fruit.indexOf(str);
}
// console.log(findIndex("orange"));

// 4.
fruit.push(fruit.indexOf("orange"))
// console.log(fruit);

// 5.
// console.log(vegetables.length);

// 6.
vegetables.push(vegetables.length);

// 7.
var food = (fruit.concat(vegetables));

// 8.
food.splice(4, 2);

// 9. 
food.reverse();

// 10.
console.log(food);


