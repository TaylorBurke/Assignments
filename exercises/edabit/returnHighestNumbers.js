const arr = [ [-9, 1,3], [1,5,6] ]

function findLargestNums(arr) {
    let answer = [];
	
	arr.forEach(array => {
        answer.push(Math.max(...array));
    })
    return answer;
}


console.log(findLargestNums(arr));