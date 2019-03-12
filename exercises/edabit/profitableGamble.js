
data = {
    cost: 5,
    chance: .5,
    win: 8
}

// A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.



isProfitable = (cost, chance, win) => {
    outcome = (chance * win) - cost;
    if (outcome >= 0) return true; 
    else return false;
};

console.log(isProfitable(data.cost, data.chance, data.win));