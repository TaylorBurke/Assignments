array = [4, 5, 7, 7, 9, 11, 1, 23, 3, 45, 6]

// function noOdds(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             continue
//         }
//             arr.splice(arr[i], 1)
        
//     } 
//     return arr;
// }



function noOdds(arr) {
    return arr.filter(a => !(a % 2));
  }

console.log(noOdds(array));