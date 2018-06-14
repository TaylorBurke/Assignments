// var array1 = [1, 2, 3]

// reducer = function(accumulator, currentValue) { 
//    return accumulator + currentValue;
// }

// function total(arr) {
// console.log(arr.reduce(reducer))
// }

// total(array1);

// var array2 = [1, 2, 3, 4, 5]


// function stringConcat(arr) {

// }



// function countCode(codeString) {
    
//     let count = 0;
//     for (let i = 0; i < codeString.length; i++) {
//     if (codeString[i].toLowerCase() === "c"){
//         if (codeString[i + 1].toLowerCase() === "o"){
//             if (codeString[i + 3].toLowerCase() === "e"){
//                 count++;
//             }
//         }
//     }
//     }
//     return count;
// }

// console.log(countCode("codecozeCodexvdgcoxe"));


// example of regex is below

var string = "codecozeCodexvdgcoxe";

function countCode(string) {
   var regEx = /(co\we)/gi;
   var matches = string.match(regEx);
return matches.length;

}

console.log(countCode(string));