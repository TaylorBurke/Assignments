// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5
array = [
    'Leroy',
    'todd',
    'terrance',
    'trevie' 
];

function capMe(arr) {
    let nextArr = [];
    
    for (let i = 0; i < arr.length; i++){
        nextArr.push(arr[i].toLowerCase());

        // I think we should look at the best way to split the names into sub arrays
        
        // this is shit
        for (let j = 0; j < arr[i].length; j++) {
            // nextArr.push(arr[i][j])
        }
    }

    


}

console.log(capMe(array));
