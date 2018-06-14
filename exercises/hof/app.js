// Higher Order Functions 

// 1) it takes another function as an argument

function hof(callback){
    // what does it return? this returns what callback returns
    return callback(anotherCallback)
}

function callback(anotherCallback){
    // what does it return? this returns what anotherCallback returns
    return anotherCallback();
}

function anotherCallback(){
    return "You found me"
}

console.log(hof(callback));

// // 2) it returns another function as an argument
// function hof2(){
// var func = function(){
//     console.log("test");
//     }
// }




function filter(cb, arr) {
    // cb is designed to take a single item from the array and its index as arguments 
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var passesTest = cb(element, i);
        if (passesTest) output.push(element);
    }
    return output;
}

var ints = [1, 2, 3, 4, 5, 6, 7]

function testForEven(){
    return int % 2 ===0;
}

var evens = filter(testforEven, ints)

console.log(evens);


var a = "apple"
a