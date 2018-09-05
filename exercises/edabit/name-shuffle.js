string = "Donald Drumpf";

function nameShuffle(str) {
    let firstSplit = str.split(" ");
    let reverseArray = firstSplit.reverse();
    let answer = reverseArray.join(" ");
    return answer
}

console.log(nameShuffle(string));