function factorial(int) {
    let array = [];
	for (i = 0; i <= int; i++){
        array.push(i)
    }

    const reducer = (acc, cv) => acc + cv;

    return array.reduce(reducer);

};

console.log(factorial(5))