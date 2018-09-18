// https://edabit.com/challenge/kbFhwaDyrd79JrgeB

myCharacter = "a";
string = "afterwards";



function charCount(myChar, str) {
    let counter = 0;
    for (i = 0; i < str.length; i ++){
        if (str[i] === myChar){
            counter ++
        }
    }
    return counter

}

console.log(charCount(myCharacter, string));