//do initial loop to push everything into a single line and remove special characters
//if that line is equal to the reverse of that line return true

var str = "bloop";

palindromeFinder = function(str){
    for (var i = 0; i < str.length; i++);
        // lowercase everything
            // remove punctuation

    var rmvChar = str.toLowerCase().replace(/[^a-z]/g, "");
        // split it, reverse it, compare with original

    for (var i = 0; i < rmvChar.length / 2; i++){
        if(rmvChar[i] !== rmvChar[rmvChar.length -1 - i]) return false;
    }
return true;
    }

module.exports = palindromeFinder;