//https://edabit.com/challenge/DbLp2kHgwQbridSSy

let str = "lazer engraved testicles"

function silenceTrump(str) {
	for (let i = 0; i < str.length; i++){
        
        if (str[i] === "a"){
            str[i] = "";
        }

        if (str[i] === "e"){
            str[i] = "";
        }

        if (str[i] === "i"){
            str[i] = "";
        }
        if (str[i] === "o"){
            str[i] = "";
        }
        if (str[i] === "u"){
            str[i] = "";
        }
        else {
            str[i] = str[i]
        }
        return str
    }
 
}

console.log(silenceTrump(str))