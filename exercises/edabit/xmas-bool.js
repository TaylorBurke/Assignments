christmas = new Date('December 25');

function xmasYet(date) {
    if (date.getMonth() === 11 & date.getDate() === 25) {
        return true
    }
    else {return false}
}

console.log(xmasYet(christmas))

