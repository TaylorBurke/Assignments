const genMulTable = (n) => {
    const output = [];
        // push 5 nums into an array
    for(let i = 1; i <= n; i++){
        const row = [];
        // do this 5 times moving up incrementally
        for(let j = 1; j <= n; j++){
            row.push(j * i);
        }
        // push to parent array
        output.push(row);
    }
    return output;
}



console.log(genMulTable(7));

module.exports = genMulTable;