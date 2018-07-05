// https://coursework.vschool.io/adjacent-difference/

array = ["hope", "you", "have", "a", "great", "day"]

const adjacent = (arr) =>{
    let mathStorage = 0;
    let arrayStorage;
    for (let i = 1; i < arr.length -1 ; i++) {
        if (mathStorage < arr[(i-1)].length + arr[i].length + arr[(i+1)].length){
            mathStorage = arr[i-1].length + arr[i].length + arr[(i+1)].length;
            arrayStorage = [arr[(i-1)], arr[i], arr[(i+1)]];            
        }        
    }
    return arrayStorage;
}

    // function Adjacent(arr){
    //     return arr.map = () => {
    //         arr()
    //     }
    // }

    // function makeStrings(arr){
    //     return arr.map(function(person){
    //         if (person.age >= 18) {
    //             return `${person.name} can go see THE MATRIX`
    //         } else {
    //             return `${person.name} is RESTRICTED (user.age = under)`
    //         }
    //     })
    // }

    module.exports = adjacent;
