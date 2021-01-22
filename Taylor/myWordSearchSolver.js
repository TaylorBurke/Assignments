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
			for (let ri = 0; ri < gridArrays[row].length; ri++){

				if (wordAsArray[0] === gridArrays[row][ri]){
					// check to see if the rest of the word is present going right
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if right within bounds
						if (gridArrays[row][ri + wi]) {
							if (wordAsArray[wi] !== gridArrays[row][ri + wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going left
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if left within bounds
						if (gridArrays[row][ri-wi]){
							if (wordAsArray[wi] !== gridArrays[row][ri-wi]) {
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
		let wordAsArray = word.split('');

		for (let row = 0; row < gridArrays.length; row++){
			for (let ri = 0; ri < gridArrays[row].length; ri++){

				if (wordAsArray[0] === gridArrays[row][ri]){
					// check to see if the rest of the word is present going down
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if down within bounds
						if (gridArrays[row+wi] && gridArrays[row+wi][ri]) {
							if (wordAsArray[wi] !== gridArrays[row+wi][ri]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going up
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if up within bounds
						if (gridArrays[row-wi] && gridArrays[row-wi][ri]){
							if (wordAsArray[wi] !== gridArrays[row-wi][ri]) {
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

	// diagonal
	// check to see if any of the consecutive indexes in each of the arrs make the word (forward or reversed)
	let isFoundD = (word, gridArrays) => {
		let wordAsArray = word.split('');

		for (let row = 0; row < gridArrays.length; row++){
			for (let ri = 0; ri < gridArrays[row].length; ri++){

				if (wordAsArray[0] === gridArrays[row][ri]){
					// check to see if the rest of the word is present going up/right
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if up/left within bounds
						if (gridArrays[row-wi] && gridArrays[row-wi][ri+wi]){
							if (wordAsArray[wi] !== gridArrays[row-wi][ri+wi]) {
								break;
							} else if (wordAsArray.length === wi+1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going down/left
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if down/left within bounds
						if (gridArrays[row+wi] && gridArrays[row+wi][ri-wi]) {
							if (wordAsArray[wi] !== gridArrays[row+wi][ri-wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going down/right
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if down/right within bounds
						if (gridArrays[row+wi] && gridArrays[row+wi][ri+wi]) {
							if (wordAsArray[wi] !== gridArrays[row+wi][ri+wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going up/left
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if up/left within bounds
						if (gridArrays[row-wi] && gridArrays[row-wi][ri-wi]){
							if (wordAsArray[wi] !== gridArrays[row-wi][ri-wi]) {
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

	// console.log(getNestedArraysFromGrid(grid))
	// console.log(getArrayFromWordList(wordList))
	return getFoundWords(getArrayFromWordList(wordList));
}

exports.solve = solve