// https://edabit.com/challenge/NKknKNfeaJxLDfJuZ

// Write a function. It will return the name of a month of the year, given the month number, according to the table below. Make sure you do not put any input or output statements in the function; the month number will be passed in and the string containing the name will be returned.
// #Number	Month -1	January -2	February -3	March -4	April -5	May -6	June -7	July -8	August -9 September -10	October -11	November -12	December


function month_name(num) {
    if (num === 1) {
        return "January"
    }
    if (num === 2) {
        return "February"
    }
    if (num === 3) {
        return "March"
    }
    if (num === 4) {
        return "April"
    }
    if (num === 5) {
        return "May"
    }
    if (num === 6) {
        return "June"
    }
    if (num === 7) {
        return "July"
    }
    if (num === 8) {
        return "August"
    }
    if (num === 9) {
        return "September"
    }
    if (num === 10) {
        return "October"
    }
    if (num === 11) {
        return "November"
    }
    if (num === 12) {
        return "December"
    }
}
