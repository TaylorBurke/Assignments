// https://edabit.com/challenge/RG5NJWDa7pZGFkhTA

const str = 'mexico'

function XO(string) {
    let str = string.toLowerCase();
    let xcounter = 0;
    let ocounter = 0;
	for (i = 0; i < str.length; i++) {

        if (str[i] === 'x') {
            xcounter++
        } if (str[i] === 'o'){
            ocounter++
        } if (xcounter === ocounter) {
            return true
        }
    }
}

console.log(XO(str));