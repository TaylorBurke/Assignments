// https://coursework.vschool.io/array-shuffler/
// Fisher-Yates FTW

array = [1, 2, 3, 4, 5, 6, 7]

strArray = ['hello', 'aloha', 'hola', 'konichiwa', 'bonjour', 'nihau', 'guttentag']

shuffleArray = (arr) => {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

console.log(shuffleArray(array))
console.log(shuffleArray(strArray));
