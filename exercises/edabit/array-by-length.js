const array = [1, 2, 3, 4, 5, 6];

function MultiplyByLength(arr) {
    let answer = [];
    for ( i = 0; i < arr.length; i++ ) {
        answer.push(arr[i] * arr.length)
    }
    
    return answer;
}

console.log(MultiplyByLength(array));