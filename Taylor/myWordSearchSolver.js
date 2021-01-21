// Write your solver code in this file
const solve = (grid, wordList) => {
	console.log(wordList, '\n')

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

	let isWordFound = (word) => {
		let arraysFromGrid = getNestedArraysFromGrid(grid);

		// horizontal
		//
		// vertical
		//
		// diagonal
		//
		// backwards
	}

	let getFoundWords = (listArray) => {
		let output = [];
		// for each word in listArray, process finding in each direction
		for (let i = 0; i < listArray.length; i++){
			if(isWordFound(listArray[i])){
				output.push(listArray[i])
			}
		}
		return output;
	}

	return getFoundWords(getArrayFromWordList(wordList));
}

exports.solve = solve