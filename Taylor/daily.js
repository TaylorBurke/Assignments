// what I love about programming

// its the only profession that is actively trying to make itself obsolete



const arrayOfObj = [
    {
        p1:"1",
        p2:"spitz",
        p3:"",
    },

];

const displayValue = (a) => {

    const x = Math.random()*10;
    let y = Math.floor(x);
    let output = a[y-1];

    return output;

};

console.log(displayValue(arrayOfObj));