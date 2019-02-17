const arr = [ [-9, 1,3], [1,5,6] ]

function findLargestNums(arr) {
    let answer = [];
	
		answer.push(arr.forEach(array => {
            array.reduce((acc, cv) => {
                
                if (cv > acc) {
                    acc = cv;
                }
                return acc;
            })
        })
    )
    return answer;
}

// should return [3, 8]

console.log(findLargestNums(arr));