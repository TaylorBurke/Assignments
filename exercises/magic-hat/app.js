var a = "GetOutGame";
var b = "IsolationTank";
var c = "barCrawl";
var d = "brewvies";
var e = "triviaNight";
var f = "sevenPeaks";
var g = "bowling";
var h = "archeryTag";
var i = "theGarage";
var j = "simplySushi";
let k = "sillyMarket";
let l = "shootOut";
let m = "drivingRange";
let n = "bundyCompound";

var paperSlips = [a, b, c, d, e, f, g, h, i, j, k, l, m, n];

var randomDraw = paperSlips[Math.floor(Math.random() * paperSlips.length)];

console.log(randomDraw);