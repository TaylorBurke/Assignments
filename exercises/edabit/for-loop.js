// this is a fun application to see what is possible with for loops


let y = "212";
let n = 23;

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length -1 -i]) return false;
    }
    return true;
}

// console.log(isPalindrome(n));

// console.log(isPalindrome(y));

