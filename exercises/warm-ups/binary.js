
const deca = 64;

function convertToBinary(num) {
    // divide the decimal number by 2 repeatedly
    // store the remainder
    let remainder = [];
    while (num > 0) {
        // take the halved number (nextNum) and run it through a loop until nothing is left
        // push the remainder to an array
        remainder.push(num % 2);
        num = Math.floor(num / 2);
    }
        // reverse the order of the remainders array
    remainder.reverse();
    answer = remainder.join("");
    return (answer);

}

console.log(convertToBinary(deca));