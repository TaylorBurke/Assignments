//https://edabit.com/challenge/DbLp2kHgwQbridSSy

let str = "lazer engraved testicles"

function silenceTrump(str) {
	for (i = 0; i < str.length; i++){
        if(str[i]=== "a" | "A"){
            str[i] = ""
        }
        return str
    }

}

console.log(silenceTrump(str))