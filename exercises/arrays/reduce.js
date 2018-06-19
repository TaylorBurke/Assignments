// https://coursework.vschool.io/array-reduce-exercises/
// 1)

// function total(arr){
//     return arr.reduce(function (accumulator, element){
//         return accumulator + element;
//     })
// }
// var nums = [1, 2, 3, 4]
// console.log(total(nums));

// 3) (I have modified this program to tally the number of people who DID NOT VOTE in addition to total voters)

function totalAbstainVotes(arr) {
    return arr.reduce(function(accumulator, voter){
            if (!voter.voted) return accumulator +1;
            return accumulator;
    }, 0);
}



function totalVotes(arr) {
    return arr.reduce(function(accumulator, voter){
            if (voter.voted) return accumulator +1;
            return accumulator;
    }, 0);
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


// function voterResults(arr){
//     return arr.reduce(function(accumulator, voter) {
//         // check age of voter
//         // add one to age group it belongs to on the accumulator
//         // return newly updated accumiulator
//     }, {
//         "18 - 25": 0,
//         "26 - 35": 0,
//         "36 -55": 0
//     })
// }

voterPercentage = function(){
 return Math.floor(totalVotes(voters) / (totalVotes(voters) + totalAbstainVotes(voters)) * 100) + "%";
}


console.log("total abstainers: " + totalAbstainVotes(voters));
console.log("total voters: " + totalVotes(voters));
console.log("Voter turnout: " + voterPercentage());