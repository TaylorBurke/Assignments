const deca = 1024;

function convertToBinary(num) {
    // divide the decimal number by 2 repeatedly
    // store the remainder
    let remainder = [];
    while (num > 0) {
        // take the halved number (nextNum) and run it through a loop until nothing is left
        // unshift the remainder to an array
        remainder.unshift(num % 2);
        num = Math.floor(num / 2);
    }
    answer = remainder.join("");
    return (answer);

}

console.log(convertToBinary(deca));