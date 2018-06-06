// from https://coursework.vschool.io/uptown-function-you-up/

var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin'", "whilen'", "livin'", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];


var writeLyrics = function(arg) {
    
    return arg.join(" ");
}

console.log(writeLyrics(lyrics));

var writeLyricsReverse = function(arg) {
    return arg.reverse().join(" ");
}

console.log(writeLyricsReverse(lyrics));   

