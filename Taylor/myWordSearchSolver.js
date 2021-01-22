// Write your solver code in this file
const solve = (grid, wordList) => {

	let getNestedArraysFromGrid = gridStr => {
		let nestedArr = [];
		let firstLevel = gridStr.split('\n');
		for (let i = 0; i < firstLevel.length; i++){
			let nextLevel = firstLevel[i].split('')
			nestedArr.push(nextLevel);
		}
		return nestedArr;
	}

	let getArrayFromWordList = wordListStr => wordListStr.split('\n');

	// horizontal
	// check to see if any of the indexes in a sub arr make the word (forward or reversed)
	let isFoundH = (word, gridArrays) => {
		let wordAsArray = word.split('');

		for (let row = 0; row < gridArrays.length; row++){
			for (let i = 0; i < gridArrays[row].length; i++){
				if (wordAsArray[0] === gridArrays[row][i]){
					// start to check to see if the rest of the word is present
					for (let wi = 1; wi < wordAsArray.length; wi++){
						// check if right within bounds
						if (gridArrays[row][i+wi]){
							if (wordAsArray[wi] !== gridArrays[row][i+wi]) {
								break;
							} else if (wordAsArray.length === wi+1) {
								return true;
							}
						}
						// check if left within bounds
						if (gridArrays[row][i-wi]){
							if (wordAsArray[wi] !== gridArrays[row][i-wi]) {
								break;
							} else if (wordAsArray.length === wi+1) {
								return true;
							}
						}
					}
				}
			}
		}
		return false;
	}

	// vertical
	// check to see if any of the same indexes in a each of the arrs make the word (forward or reversed)
	let isFoundV = (word, gridArrays) => {
		let wordArr = word.split('');
		for (let row = 0; row < gridArrays.length; row++){
			for (let i = 0; i < i.length; i++){
				if (wordArr[0] === row[i]){
					// start to check to see if the rest of the word is present

				}
			}
		}
		return false;
	}

	// diagonal
	// check to see if any of the consecutive indexes in each of the arrs make the word (forward or reversed)
	let isFoundD = (word, gridArrays) => {
		let wordArr = word.split('');
		for (let row = 0; row < gridArrays.length; row++){
			for (let i = 0; i < i.length; i++){
				if (wordArr[0] === row[i]){
					// start to check to see if the rest of the word is present

				}
			}
		}
		return false;
	}

	let isWordFound = (word) => {
		let arraysFromGrid = getNestedArraysFromGrid(grid);
		return (isFoundH(word, arraysFromGrid) || isFoundV(word, arraysFromGrid) || isFoundD(word, arraysFromGrid))
	}

	let getFoundWords = (wordListArray) => {
		let output = [];
		// for each word in listArray, process finding in each direction
		for (let i = 0; i < wordListArray.length; i++){
			if(isWordFound(wordListArray[i])){
				output.push(wordListArray[i])
			}
		}
		return output;
	}

	console.log(getNestedArraysFromGrid(grid))
	return getFoundWords(getArrayFromWordList(wordList));
}

exports.solve = solve