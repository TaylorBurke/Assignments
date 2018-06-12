var readline = require('readline-sync');  
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? '));  

// var newtxt = ""

//     for(i=0; i<= input.length; i++)
//     var plain = input.charCodeAt(i);
//     newtxt += String.fromCharCode(plain) + shift

var caesarCipher = function(input, shift) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var newStr = "";
    for(var i = 0; i < input.length; i++) {
        if(letters.indexOf(input[i]) === -1) {
            input += input[i];
        } else {
            var position = letters.indexOf(input[i]);
            newStr += letters[(position + shift) % 26];
        }
    }
    return newStr;
}
var crypto = readline.question('Your encrypted phrase is:\t' + caesarCipher(input, shift) +"\nNow buy some btc!");  
