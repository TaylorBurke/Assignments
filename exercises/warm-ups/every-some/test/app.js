const arr = require('../array.js');


// every

callbackFunction = function (arr){
    let counter = 0;
    for (let i = 0; i < arr.length; i ++) 
    for (let j = 1; j < arr.length; j ++)
    if (typeof(arr[i]) == typeof(arr[j])) { 
        counter ++
    } if (counter == arr.length) {
        answer = true
    } else {
        answer = false
    }
}

const returnBoolean = function(arg, callbackFunction) {
  if (callbackFunction == true) {
      return `the data type of this array is ${arg}`
    } else {
        return `the type of is not comprised entirely of ${arg}`
    }
}


// some

callbackFunction1 = function (arr){
    let counter = 0;
    for (let i = 0; i < arr.length; i ++)  
    { 
        for (let j = 1; j < arr.length -1; j ++)
        if (typeof(arr[i]) == typeof(arr[j])) { 
            counter ++
        } if (counter > 0) {
            answer = true
        } else {
            answer = false
        }
    }
 
}

const returnBoolean1 = function(arg, callbackFunction1) {
  if (callbackFunction1 == true) {
      return `there is a ${arg} in this array`
    } else {
        return `the arrray doesn't have a ${arg}`
    }
}


arg = "string";


console.log(returnBoolean(arg));
console.log(returnBoolean1(arg));

module.exports = returnBoolean;

