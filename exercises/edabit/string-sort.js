// https://edabit.com/challenge/bHDbMWpdeNaw23jqT

function AlphabetSoup(str) {
	let splitString = str.split(""); // get array of the indices
	let sortedArray = splitString.sort(); // alphabetize the array items
	let stringify = sortedArray.join(""); // create string from array
	
	return stringify
}
