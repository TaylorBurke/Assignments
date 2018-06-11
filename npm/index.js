// https://www.npmjs.com/package/readline-sync

// var rs = require("readline-sync");

// var userName = rs.question ('May I have your name?');

// var likesRaves = rs.keyInYN("Do you like raves?");

// console.log(likesRaves);

// if (likesRaves) {
//     console.log("Drop the Bass!!1")
// } else {
//     console.log("cool story bro")
// }

// var directions = ["North", "South", "East", "West"];

// var direction  = rs.keyInSelect(directions, "Which way do you want to go?");



var ask = require('readline-sync');  
console.log('Greetings primitive life form! My name is Salo. Help me get to know you!\n');  
var firstName = ask.question('What is your first name?\t');  
var lastName = ask.question('\nAnd your last name?\t');
var age = ask.question('\nBeautiful. Nice to make your acquaintance ' + firstName.toUpperCase() + '!\nI am approximately 2.56 million earth-years old. What is your age?\t');
var background = ask.question('\nWow. You must feel great!\nSo far, I know that your name is ' + firstName + " " + lastName + " and you\'re " + age + " years old.\nGive me a short background and I\'ll repeat back to you what I remember.\t");
var remember = ask.question("\nSo, the information you gave me was " + background.length + " characters long.\nThis was the first half: " + background.substr(0, background.length * .5) + "\n\nWould you like me to start somehwere else in your info? Choose a number in the range [0-" + background.length + "]:\t");
var 