// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB


const string = "stripe";

function doubleChar(str) {

    const letters = [];

    const array = str.split("");

    for (i = 0; i < array.length; i++) {

        letters.push(array[i]);
        letters.push(array[i]);
    }

    return letters.join('')
}

console.log(doubleChar(string));