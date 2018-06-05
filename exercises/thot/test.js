// for research purposes only

// var total = 0;
// while(true) {
//     total++
//     console.log(total)
// }




var str = "Hello my name is Albert";

var changeName = function (str, name) {
    var arr = str.split(' ');
    arr.splice(4, 1, name)
    console.log( arr.join(' '))
}

changeName(str, "Taylor");