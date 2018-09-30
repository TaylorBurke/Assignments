let item = "pop";
let items = 5;

function repeat(item, items) {
    let array = [];
    for (i = 0; i < items; i++) {
        array.push(item)
    }
    
    return array
}

console.log(repeat(item, items));