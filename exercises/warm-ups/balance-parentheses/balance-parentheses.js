
// https://coursework.vschool.io/balance-parenthesis/

const nuclearFamily = (str) => {
    let open = 0;
    let close = 0;

    // if ( is in a string, scan the string to check if ) comes before the next ( 

    for (let i = 0; i < str.length; i++) {
        if (open < close) {
            return false
        } else if (str[i] === "(") {
            open++
        } else if (str[i] === ")") {
            close++
        }
    } return true
}

    module.exports = nuclearFamily;