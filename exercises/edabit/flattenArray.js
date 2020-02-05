function flatten(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++){
        output.push(...arr[i]);
    }
    return output;
}
const arry = [[1,2],[3,4]];
console.log(flatten(arry));