// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

let x = ['red', 'blue', 1, 0, 2];


const isNum = (value) => {
    let answer = typeof value;
    if (answer === "number"){
        return value
    } 
}

function filterNewArray(arr){
    var arrNew = arr.filter(function (item){
        if (typeof item === "number"){
            return item;
        }
    });
    
    var arrNew2 = arr.filter(function (item){
        return (typeof item === "number");
    });

    return arrNew2
}

console.log(filterNewArray(x));

function filterArray(arr) {
	const result = arr.filter(isNum);
    return result
}

