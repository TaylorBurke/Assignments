// https://edabit.com/challenge/yaXQvCzAXJLe37Qie

let num = 123232145;
function sortDecending(num) {
    let arr = [];
    for (i = 0; i < num.length; i++){
        arr.push(num[i])
    }
    arr.push(num);
    return arr
}

console.log(sortDecending(num))