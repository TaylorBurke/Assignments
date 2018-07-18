string = "eEk"

function hackerSpeak(str) {
	output = [];
	for (let i = 0; i < str.length; i++){
    
	if (str[i] === "e" || str[i] === "E"){
            str[i] = "3";
             output.push(str[i])
			}
console.log(output)

        }
        return str;
}

function hackerSpeak(str) {
	result = ''
	let mappings = {
		a: '4',
		e: '3',
		i: '1',
		o: '0',
		s: '5'
	}
	for (let i = 0; i < str.length; ++i) {
		const letter = str[i].toLowerCase()
        const replacement = mappings[letter];
       // console.log(replacement);
		result += (replacement) ? replacement : letter
	}
	return result
}

console.log(hackerSpeak ("I are Dr Ron Paul, Ob.Gyn." ));