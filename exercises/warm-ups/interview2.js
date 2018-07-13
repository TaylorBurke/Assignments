// array = [1, 3, 4, 6, 8, 5, 10]

// array = [500, 200, 10]

// const returnBig = (arr) => {
//     (arr.sort((a, b) => a - b));
//     return arr.slice(-1)[0]
// }

// console.log(returnBig(array));

// Math.max would have been useful -> provide a list of numbers and deconstruct it first



// take a string return boolean True if it has the same number of X and O

// string = "XoXoxOxOxoxo"
// string = "ooxX"
// string = ""
// string = "jhgytd"
string = "ooxXx"

const returnBoolean = (str) => {
    str = str.toLowerCase();
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            x = x + 1;
        }
        if (str[i] === 'o') {
            o = o + 1;
        }
       
    }
    return (x === o)
}

console.log(returnBoolean(string));