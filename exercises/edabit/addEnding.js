function addEnding(arr, ending) {
    const mapper = i => i + ending;
	return arr.map(mapper);
}