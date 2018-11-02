// https://edabit.com/challenge/DrxLn9tdXg4xWpMAY
 

function verifySubstrs(mainStr, head, body, tail) {
 

    if ((mainStr.startsWith(head)) && (mainStr.includes(body)) && (mainStr.endsWith(tail))){
       return "My head, body, and tail"
    }

   else {
       return "incomplete"
   }

}

console.log(verifySubstrs("hello", "s", "ell", "lo"))