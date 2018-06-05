// from https://coursework.vschool.io/exercise-functions/
// also see https://coursework.vschool.io/functions/


// function mySum(par, par1) {
//     return (par + par1)
// }

// console.log(mySum(4, -5)); 


// *work in progress*

// function selectBig(par, par1, par2) {
//     if(par > par1 && par > par2) {
//         return par
//     } else if(par1 > par2 && par1 > par) {
//         return par1
//     } else {
//         return par2
//     }
// }


// console.log(selectBig(222, 32, 311));



// function infoNum(par) {
//     if(par % 2 === 0) {
//         return("even")
//     } else { 
//         return("odd")
//     }
// }

// console.log(infoNum(10)); 


// function stringy(str) {
//  if (str.length <= 20){
//      return (str + str)
//  } else {
//      return str.slice(0, str.length / 2)
//  }
// }

// console.log(stringy("sleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeep"))

function getFibonacci(n) {
    var a = 1, b = 0, temp;
    
    while (n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return b;
}

  console.log(getFibonacci(50));