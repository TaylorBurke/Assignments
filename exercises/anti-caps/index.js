function antiCaps(str){
    let newString = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase()){
            newString += str[i].toLowerCase();
        } else {
            newString += str[i].toUpperCase();
        }
    } 
    return newString;
}

module.exports = antiCaps;