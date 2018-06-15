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

var paperSlips = [a, b, c, d, e, f, g, h, i, j];

var randomDraw = paperSlips[Math.floor(Math.random() * paperSlips.length)];

console.log(randomDraw);