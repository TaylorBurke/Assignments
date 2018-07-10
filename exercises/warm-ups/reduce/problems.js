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

// It's best to start out by declaring our main function and then using comments to write out the steps in plain English

// first, we have our function to calculate percentages. We'll call this function from within our main function to make it readable and shorter.

function calculatePercentage (sub, total) {  
    return (sub / total) * 100;
}

// Now we need to sort the voters into their age groups

function printVoterTurnout (voters) {  
    // If we want we can write more pseudo-code to create a plan for sorting. 
    // first start by creating an arrays where our sorted voters will live
    var ageGroup1 = [];
    var ageGroup2 = [];
    var ageGroup3 = [];
    // next we'll write a for loop that iterates over our voters and sorts them into those arrays 
    for (var i = 0; i < voters.length; i++){
        var voter = voters[i];
        if (voter.age >= 18 && voter.age <= 25) {
            ageGroup1.push(voter);
        } else if (voter.age >= 26 && voter.age <= 35) {
            ageGroup2.push(voter);
        } else {
            ageGroup3.push(voter);
        }
    }
// Now we need to get the percentage of voters who actually voted.
// We have a function to calculate the percentage,
// but how do we get the values to pass as arguments?
// For each age group we'll need to pass 
// in the number who voted and the total
// We haven't considered how to do this.
// Let's make another plan. 
}

// We're going to need a function that 
// gets us only the voters that have 
// voted.
// So basically a filter

function filterVoters (voters) {  
    // we can actually just use the 
    // built-in array method 'filter'
        return voters.filter(function (voter) {
            return voter.voted === true;
         })
    } 

    function printVoterTurnout (voters) {  
        var ageGroup1 = [];
        var ageGroup2 = [];
        var ageGroup3 = [];
        // next we'll write a for loop that iterates over our voters and sorts them into those arrays 
        for (var i = 0; i < voters.length; i++){
            var voter = voters[i];
            if (voter.age >= 18 && voter.age <= 25) {
                ageGroup1.push(voter);
            } else if (voter.age >= 26 && voter.age <= 35) {
                ageGroup2.push(voter);
            } else {
                ageGroup3.push(voter);
            }
        }
    
    
        var group1VotersVoted = filterVoters(ageGroup1).length;
        var group1VotingPercentage = calculatePercentage(group1VotersVoted, ageGroup1.length);
    
        var group2VotersVoted = filterVoters(ageGroup2).length;
        var group2VotingPercentage = calculatePercentage(group2VotersVoted, ageGroup2.length);
    
        var group2VotersVoted = filterVoters(ageGroup3).length;
        var group3VotingPercentage = calculatePercentage(group2VotersVoted, ageGroup3.length);
    
    // Now we just need to print these according to the format specified in the description
    
        console.log('18-25: ' + group1VotingPercentage + '%');
        console.log('26-35: ' + group2VotingPercentage + '%');
        console.log('36-55: ' + group3VotingPercentage + '%');
    
    }

printVoterTurnout(voters);