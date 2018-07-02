const validateAddress = (str) =>{
    splitAddress = str.split(".")
    let answer;
    if (splitAddress.length < 4){
        return false
    } else {
        for (let i = 0; i < splitAddress.length; i++) {
            if (Number(splitAddress[i]) <= 255 && Number(splitAddress[i] >= 0)) {
                answer = true
            } else {
                return false
            };
        }
    }
    return answer;
}
module.exports = validateAddress;

console.log(validateAddress('0.30..90'))