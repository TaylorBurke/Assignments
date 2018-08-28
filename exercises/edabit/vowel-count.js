str = "steep"

function countVowels(str) {
	for (i = 0; i < str.length; i++) {
        
        let vowel = str[i];
        const counter = 0;
        if (vowel === "u" )
        {
           counter++
        }
        if (vowel === "o" )
        {
           counter++
        }
        if (vowel === "i" )
        {
           counter++
        }
        if (vowel === "e" )
        {
           counter++
        }
        if (vowel === "a" )
        {
           counter++
        }
        return counter
	}
}

console.log(countVowels(str));