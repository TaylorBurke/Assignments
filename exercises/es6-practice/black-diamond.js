// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators-2/

// product = (...numbers) => {
//     return numbers.reduce((acc, number) => {
//       return acc * number;
//     }, 1)
//   }

arr = [1, 4, 5, 6]

unshift = (...array) => array;

console.log(unshift(...arr, 4, 5, 6, 7, 8));

