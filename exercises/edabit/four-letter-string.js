array = ["test", "fuck", "bitch", "face", "McGee", "fly"]

function isFourLetters(arr) {
    
    newArray = arr.filter(str => str.length < 5 && str. length > 3);
    return newArray
    
}


console.log(isFourLetters(array));