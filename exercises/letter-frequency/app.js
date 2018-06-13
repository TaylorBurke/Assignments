function getFrequency(str) {
    var freq = {};
    for (var i = 0; i < str.length; i++) {
        var character = str[i];
            if (freq[character]) {
                freq[character]++;
            } else {
                freq[character] = 1;
            }
    }
    return freq;
};


console.log(getFrequency("the quick brown fox took quite a bad fall"))

