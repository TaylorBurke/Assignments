/* this application is designed to return each character of a string on it's own line 
*/

// var cat = "meow";

// // console.log(str);
// function returnCharacters(str) {
//     for(i = 0; i < str.length; i++){
//         console.log(str[i])
//     };
// }

// returnCharacters(cat);

// returnCharacters("floob");


function returnPosition(str, char) {
    for(i = 0; i < str.length; i++) if (
        str.indexOf(char) > -1) {return str.indexOf(char)
    } else {
        return "Character not found";
    }
}

console.log(returnPosition("floob", "z"));


