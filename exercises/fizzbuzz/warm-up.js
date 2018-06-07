


function fizzBuzz() {
    var foo = [];


    for (var i = 1; i <= 100; i++) {
       foo.push(i);
    }

    var bar = [];
for (var i = 0; i <= 100; i++) {
if ((foo[i] % 3 === 0) && (foo[i] % 5 === 0))   {
       bar.push("FizzBuzz")
    } else if (foo[i] % 3 === 0) {
        bar.push("Fizz")
    } else if (foo[i] % 5 === 0) {
         bar.push("Buzz")
    } else {
        bar.push(foo[i])
    }
}
return bar;
}

console.log(fizzBuzz());