string = "test"

function reverseString(str) {
        let splitString = str.split(""); // get array of each index
        let reverseArray = splitString.reverse(); // reverse array
     

        let joinArray = reverseArray.join(""); // create string from reversed array
        
        return joinArray; 
    }
     
console.log(reverseString(string));