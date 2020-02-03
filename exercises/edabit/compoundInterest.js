// Suppose that you invest $10,000 for 10 years at an interest rate of 6% compounded monthly. What will be the value of your investment at the end of the 10 year period?

// Create a function that accepts the principal p, the term in years t, the interest rate r, and the number of compounding periods per year n. The function returns the value at the end of term rounded to the nearest cent.

const compoundInterest = (p, t, r, n) => {
let modifier = t * n;
let interest = p * (Math.pow((1 + r / n), modifier)) - p;
return +(interest + p).toFixed(2);
}

console.log(compoundInterest(10000, 10, 0.06, 12));
