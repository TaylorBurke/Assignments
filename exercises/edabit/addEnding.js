// for use with string arrays and string endings

function addEnding(arr, ending) {
    const mapper = i => i + ending;
	return arr.map(mapper);
}