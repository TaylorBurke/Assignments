const tileHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 3 }
];
// that's how you use a reducer!
function maximumScore(tileHand) {
	return tileHand.reduce((p,c) => p + c.score, 0);
}

console.log(maximumScore(tileHand));