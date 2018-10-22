// https://edabit.com/challenge/yHGowWucg3k2kJdZ4

stringA = "Abel";
stringC = "Cain";

function comp(str1, str2) {
	if (str1.length === str2.length) {
        return true
    }
    return false
}

console.log(comp(stringA, stringC));