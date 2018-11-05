// https://www.w3schools.com/jsref/jsref_push.asp

string = "4 5 -1 5 3 17 3 -3";

function highLow(str) {

    const nums = [];
    const array = str.split(" ");

    for (i = 0; i < array.length; i++) {
        nums.push(Number(array[i]))
    }


    const high = Math.max(...nums);
    const low = Math.min(...nums);

    const answer = `${high} ${low}`;

    return answer;
}

console.log(highLow(string));