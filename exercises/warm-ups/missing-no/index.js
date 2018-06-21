var cases = [3, 5, 4, 8, 1, 2, 7];

function findMissingNo(arr){
    // sequence the array

       var sortedArr = arr.sort(function(a, b){
           return a - b;
        })
       
    // check for gaps
        // loop through array
        // check if there is more than a difference of 1 between two given sequenced indices

        for (var i = 0; i < sortedArr.length; i++) {

    // return the number that should fill the gap
    
        if (sortedArr[i] - sortedArr[i + 1] !== -1){
            return sortedArr[i] +1;
        }
    }
}

console.log(findMissingNo(cases));

module.exports = findMissingNo;