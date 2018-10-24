

/*
 * Complete the 'minimalOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY words as parameter.
 */

wordArr = [
    "nest",
    "frog",
    "beet",
    "beet",
    "bookkeeper"
]




function findPairs(words) {

    
    let bucket = [];
    let bucket1 = [];
    let bucket2 = [];
    let bucket3 = [];
    let bucket4 = [];
    let bucket5 = [];

    let word1 = (words[0]);
    let word2 = (words[1]);
    let word3 = (words[2]);
    let word4 = (words[3]);
    let word5 = (words[4]);

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++)
        if (words[i][j] === words[i][j -1]){
            bucket.push(words[i][j])
        }
    }

    return bucket
}

function minimalOperations(words) {

// get the length of the arguments 
// push them into a new array

}

console.log(findPairs(wordArr));
