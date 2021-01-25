// Write your solver code in this file
const solve = (rawGrid, rawWordList) => {

	let getArraysFromRawGrid = gridStr => {
		let nestedArr = [];
		let stringArray = gridStr.split('\n');
		for (let i = 0; i < stringArray.length; i++) {
			let nextLevel = stringArray[i].split('')
			nestedArr.push(nextLevel);
		}
		return nestedArr;
	}

	let getWordList = wordListStr => wordListStr.split('\n');

	let grid = getArraysFromRawGrid(rawGrid);


	// horizontal
	// check to see if any of the indexes in a sub arr make the word (forward or reversed)
	let isFoundH = (word) => {
		let wordAsArray = word.split('');

		for (let row = 0; row < grid.length; row++) {
			for (let ri = 0; ri < grid[row].length; ri++) {

				if (wordAsArray[0] === grid[row][ri]) {
					// check to see if the rest of the word is present going right
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if right within bounds
						if (grid[row][ri + wi]) {
							if (wordAsArray[wi] !== grid[row][ri + wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going left
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if left within bounds
						if (grid[row][ri - wi]) {
							if (wordAsArray[wi] !== grid[row][ri - wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
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
	let isFoundV = (word) => {
		let wordAsArray = word.split('');

		for (let row = 0; row < grid.length; row++) {
			for (let ri = 0; ri < grid[row].length; ri++) {

				if (wordAsArray[0] === grid[row][ri]) {
					// check to see if the rest of the word is present going down
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if down within bounds
						if (grid[row + wi] && grid[row + wi][ri]) {
							if (wordAsArray[wi] !== grid[row + wi][ri]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going up
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if up within bounds
						if (grid[row - wi] && grid[row - wi][ri]) {
							if (wordAsArray[wi] !== grid[row - wi][ri]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
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
	let isFoundD = (word) => {
		let wordAsArray = word.split('');

		for (let row = 0; row < grid.length; row++) {
			for (let ri = 0; ri < grid[row].length; ri++) {

				if (wordAsArray[0] === grid[row][ri]) {
					// check to see if the rest of the word is present going up/right
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if up/left within bounds
						if (grid[row - wi] && grid[row - wi][ri + wi]) {
							if (wordAsArray[wi] !== grid[row - wi][ri + wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going down/left
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if down/left within bounds
						if (grid[row + wi] && grid[row + wi][ri - wi]) {
							if (wordAsArray[wi] !== grid[row + wi][ri - wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going down/right
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if down/right within bounds
						if (grid[row + wi] && grid[row + wi][ri + wi]) {
							if (wordAsArray[wi] !== grid[row + wi][ri + wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
								return true;
							}
						}
					}
					// check to see if the rest of the word is present going up/left
					for (let wi = 1; wi < wordAsArray.length; wi++) {
						// check if up/left within bounds
						if (grid[row - wi] && grid[row - wi][ri - wi]) {
							if (wordAsArray[wi] !== grid[row - wi][ri - wi]) {
								break;
							} else if (wordAsArray.length === wi + 1) {
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
		return (isFoundH(word) || isFoundV(word) || isFoundD(word))
	}

	let getFoundWords = (wordListArray) => {
		return wordListArray.filter(w => isWordFound(w));
	}

	return getFoundWords(getWordList(rawWordList));
}

exports.solve = solve


