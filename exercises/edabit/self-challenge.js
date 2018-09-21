//  challenge: write a function that takes two arguments
// first is the base number
// second is the exponent of that number
// ie (5, 5) would return 5 times itself 5 times, or 3125
// note; this includes the first instance, so it looks like:
// (5 * 5 * 5 * 5 * 5)

let exponent = 3;
let number = 3;

const scientificNotation = (x,y) => {
    let counter = 0
   for(i = 0; i < y-1; i++){
     if(counter == 0){
        counter += x * x
     }
     else{
       counter *= x
     }
   }
    return counter
}

// the cheaty way
//return Math.pow(num, exp)


console.log(scientificNotation(number, exponent));