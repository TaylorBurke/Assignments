// https://coursework.vschool.io/matching-words/

const cryptic = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

const matchWords = str => {
// get rid of special chars and capitals
    const noSpecial = str.replace(/[^a-z]/gi, "").toLowerCase();
    // split string
    const splitted = noSpecial.split(" ");
    console.log(splitted);
    const sorter = {};
    const output = [];
    // loop through array
    splitted.forEach(word => {
        // check our object to see if it already has a property with that string name

        if (sorter.hasOwnProperty(word) || !output.includes(word)){
            output.push(word);
        } else {
            sorter[word] = true;
        }
        
    });
    return output;
// if so add to duplicate array
// if not, set string as a key on the object

// return duplicate array
}




matchWords(cryptic);


module.exports = matchWords;