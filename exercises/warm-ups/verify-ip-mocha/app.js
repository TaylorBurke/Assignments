// https://coursework.vschool.io/validate-ip-address/


const verifyIp = function (str) {
    splitString = str.split(".")
    let answer;
    if (splitString.length < 4) {
        answer = false;
    } else {
        for (i = 0; i < splitString.length; i++)
            if (Number(splitString[i]) <= 255 && Number(splitString[i]) >= 0) {
                answer = true;
            } else {
                answer = false;
            };
            return answer;
        }
    }  

module.exports = verifyIp;