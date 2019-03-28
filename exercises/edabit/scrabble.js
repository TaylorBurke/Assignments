const tileHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 3 }
];

function maximumScore(tileHand) {
    const ary=[];
    for (let i = 0; i<tileHand.length;i++){

        console.log(Object.keys(tileHand));

    }

}

console.log(maximumScore(tileHand));