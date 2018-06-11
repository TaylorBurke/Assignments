function genRando(arg) {

var passWord = "";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><~=-";

for (i = 0; i < arg; i++) {
    passWord += possible.charAt(Math.floor(Math.random() * possible.length));   
}
    return passWord;
}


console.log(genRando(18));

// function genRando(arg) {

//     var passWord = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><~=-`";
    
//     for (i = 0; i < arg; i++)
//         passWord += possible.charAt(Math.floor(Math.random() * possible.length));   
        
//         if ((passWord.indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ") > -1) 
//         && (passWord.indexOf("abcdefghijklmnopqrstuvwxyz") > -1) 
//         && (passWord.indexOf("0123456789") > -1 )
//         && (passWord.indexOf("!@#$%^&*()?><~=-`") > -1)) {
//             return passWord;
//         }
//         else {
//             genRando(arg);
//         }
    
    
//     console.log(genRando(18));