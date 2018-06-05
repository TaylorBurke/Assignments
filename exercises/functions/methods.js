// var tay = "Taylor Willard Burke";

// function dupRmv(str){
//     var output = {
//         noDuplicates: "",
//         extras: ""
//     } 
//     for (i = 0; i < string.length; i++) {
//      if(output.noDuplicates.includes(str[i])) {
//         output.extras += str[i];
//      } else {
//         output.noDuplicates += str[i];
//      }
//     }
//     return output;
// }
// console.log(dupRmv(tay));

// given a string, extract duplicates

// loop the string
// determine if char has been seen before
// if true: add it to extra string
// otherwise add it to noDuplicates
// return output






var sort = function(str){
    var output = {
        noDupes: "",
        extras: ""
    }
    for(var i = 0; i < str.length; i++){
        if(output.noDupes.indexOf(str[i]) > -1) {
         output.extras += str[i];
     } else {
        output.noDupes += str[i];
     }
  }
  return output;
}

console.log(sort('Taylor Willard Burke'));