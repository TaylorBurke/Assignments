

nameShuffler = (str) => {

    let arr = [];
    let res = str.split(" ");
    arr.push(res[0]);
    for (i = 0; i < str.length; i++) res[0] = res[1];
    res.push(arr);
    return (res[0]);

}

console.log(nameShuffler("Donald Trump"));