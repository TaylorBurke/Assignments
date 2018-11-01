//https://edabit.com/challenge/DbLp2kHgwQbridSSy

let str = "lazer engraved testicles"

function silenceTrump(str) {

var regex = /[aeiou]/gi;

return str.replace(regex, '');
}


console.log(silenceTrump(str))