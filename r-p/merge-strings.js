

// function takes two strings
// merge them according the the example:

// sop + map = smoapp

const string1 = 'sop';
const string2 = 'mapl';

function mergeStrings(a, b) {


    const merger = [];


        for (let i = 0; i < a.length; i++) {
            merger.push(a[i] + b[i]);
        }

        for (let i = a.length; i < b.length; i++) {
            merger.push(b[i])
        }


    return merger.join("")
}

// console.log(mergeStrings(string1, string2));

function merge(a, b) {
    if (b.length > a.length) {
        [a, b] = [b, a]
    }
    return a.split('').map((letter, index) => letter + (b[index] || "")).join("")
}

console.log(merge(string1, string2));

