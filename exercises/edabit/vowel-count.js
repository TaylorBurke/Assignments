str = "steep"

function countVowels(str) {
	for (i = 0; i < str.length; i++) {
		let vowel = str[i]
        if (vowel === "e" )
        {
            return(vowel)
        }
	}
}

console.log(countVowels(str));