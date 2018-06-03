/* this application is designed to return each character of a string on it's own line 
*/

var cat = "meow";



// console.log(str);
function returnCharacters(str) {
    for(i = 0; i < str.length; i++){
        console.log(str[i])
    };
}

returnCharacters(cat);

