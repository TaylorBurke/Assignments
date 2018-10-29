array = [1, -1, 2, 3, 5, 100];

function sortArray(arr){
    if (arr === null) {
        return []
    } 
    return arr.sort((a, b) => a - b)
}

console.log(sortArray(array));