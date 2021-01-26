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


	let isWordComplete = ( word, row, column, direction) => {
		let output;
		let rowOperand;
		let columnOperand;

		for (let wi = 1; wi < word.length; wi++) {
			switch (direction) {
				case 'upLeft':
					rowOperand = (row - wi);
					columnOperand = (column - wi);
					break;
				case 'upRight':
					rowOperand = (row - wi);
					columnOperand = (column + wi);
					break;
				case 'up':
					rowOperand = (row - wi);
					columnOperand = (column);
					break;
				case 'downLeft'	:
					rowOperand = (row + wi);
					columnOperand = (column - wi);
					break;
				case 'downRight' :
					rowOperand = (row + wi);
					columnOperand = (column + wi);
					break;
				case 'down'	:
					rowOperand = (row + wi);
					columnOperand = (column);
					break;
				case 'left'	:
					rowOperand = (row);
					columnOperand = (column - wi);
					break;
				case 'right':
					rowOperand = (row);
					columnOperand = (column + wi);
					break;
			}

			// check if next letter in grid is within bounds
			if (grid[rowOperand] && grid[rowOperand][columnOperand]) {
				// if not equal to the next letter in the word, break loop
				if (word[wi] !== grid[rowOperand][columnOperand]) {
					break;
					// if matches reach word length we found the word
				} else if (word.length === wi + 1) {
					output = true;
				}
			}
		}

		return output;
	}


	// horizontal
	// check to see if any of the indexes in a sub arr make the word (forward or reversed)
	let isFoundH = (rawWord) => {
		let word = rawWord.split('');

		for (let row = 0; row < grid.length; row++) {
			for (let column = 0; column < grid[row].length; column++) {

				if (word[0] === grid[row][column]) {
					if (isWordComplete(word, row, column, "left")){return true}
					if (isWordComplete(word, row, column, "right")){return true}
				}
			}
		}
		return false;
	}

	// vertical
	// check to see if any of the same indexes in a each of the arrs make the word (forward or reversed)
	let isFoundV = (rawWord) => {
		let word = rawWord.split('');

		for (let row = 0; row < grid.length; row++) {
			for (let column = 0; column < grid[row].length; column++) {

				if (word[0] === grid[row][column]) {
					if (isWordComplete(word, row, column, "up")){return true}
					if (isWordComplete(word, row, column, "down")){return true}
				}
			}
		}
		return false;
	}

	// diagonal
	// check to see if any of the consecutive indexes in each of the arrs make the word (forward or reversed)
	let isFoundD = (rawWord) => {
		let word = rawWord.split('');

		for (let row = 0; row < grid.length; row++) {
			for (let column = 0; column < grid[row].length; column++) {

				if (word[0] === grid[row][column]) {
					if (isWordComplete(word, row, column, "upRight")){return true}
					if (isWordComplete(word, row, column, "upLeft")){return true}
					if (isWordComplete(word, row, column, "downLeft")){return true}
					if (isWordComplete(word, row, column, "downRight")){return true}
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

// @todo detected an edge case with you/you're

exports.solve = solve