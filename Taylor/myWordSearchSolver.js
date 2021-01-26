const solve = (rawGrid, rawWordList) => {

	const getGrid = rawGrid => {
		let gridArray = [];
		let stringArray = rawGrid.split('\n');
		for (let i = 0; i < stringArray.length; i++) {
			let nextLevel = stringArray[i].split('')
			gridArray.push(nextLevel);
		}
		return gridArray;
	}

	const getWordList = rawList => rawList.split('\n');

	let grid = getGrid(rawGrid);

	let wordList = getWordList(rawWordList);

	const findByDirection = ( word, rowIndex, columnIndex, direction) => {
		let rowOperand;
		let columnOperand;

		// 0 already verified, start at 1
		for (let indexOfWord = 1; indexOfWord < word.length; indexOfWord++) {
			// set direction and distance
			switch (direction) {
				case 'upLeft':
					rowOperand = (rowIndex - indexOfWord);
					columnOperand = (columnIndex - indexOfWord);
					break;
				case 'upRight':
					rowOperand = (rowIndex - indexOfWord);
					columnOperand = (columnIndex + indexOfWord);
					break;
				case 'up':
					rowOperand = (rowIndex - indexOfWord);
					columnOperand = (columnIndex);
					break;
				case 'downLeft'	:
					rowOperand = (rowIndex + indexOfWord);
					columnOperand = (columnIndex - indexOfWord);
					break;
				case 'downRight' :
					rowOperand = (rowIndex + indexOfWord);
					columnOperand = (columnIndex + indexOfWord);
					break;
				case 'down'	:
					rowOperand = (rowIndex + indexOfWord);
					columnOperand = (columnIndex);
					break;
				case 'left'	:
					rowOperand = (rowIndex);
					columnOperand = (columnIndex - indexOfWord);
					break;
				case 'right':
					rowOperand = (rowIndex);
					columnOperand = (columnIndex + indexOfWord);
					break;
			}

			// check if next letter in grid is within bounds
			if (grid[rowOperand] && grid[rowOperand][columnOperand]) {
				// if not equal to the next letter in the word, break loop
				if (word[indexOfWord] !== grid[rowOperand][columnOperand]) {
					break;
					// if it passes above and is appropriate length we found the word
				} if (word.length === indexOfWord + 1) {
					return true;
				}
			}
		}
	}

	let isFound = (rawWord) => {
		let word = rawWord.split('');

		for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
			for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {

				if (word[0] === grid[rowIndex][columnIndex]) {
					// if first letter match, verify each direction
					if (findByDirection(word, rowIndex, columnIndex, "left") 
						|| findByDirection(word, rowIndex, columnIndex, "right") 
						|| findByDirection(word, rowIndex, columnIndex, "up") 
						|| findByDirection(word, rowIndex, columnIndex, "down") 
						|| findByDirection(word, rowIndex, columnIndex, "upRight") 
						|| findByDirection(word, rowIndex, columnIndex, "upLeft") 
						|| findByDirection(word, rowIndex, columnIndex, "downRight") 
						|| findByDirection(word, rowIndex, columnIndex, "downLeft")) return true;
				}
			}
		}
	}

	const getFoundWords = wordList => wordList.filter(w => isFound(w));

	return getFoundWords(wordList);
}

exports.solve = solve