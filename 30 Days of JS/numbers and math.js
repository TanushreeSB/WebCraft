const score = 400
// console.log(score); 400

const balance = new Number(100)
// console.log(balance); [Number: 100]

// console.log(balance.toString().length); 3
// console.log(balance.toFixed(1));  100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // negative value converted to positive
// console.log(Math.round(4.6)); 5
// console.log(Math.ceil(4.2)); 5
// console.log(Math.floor(4.9)); 4
// console.log(Math.min(4, 3, 6, 8)); 3
// console.log(Math.max(4, 3, 6, 8));  8

console.log(Math.random()); // 0.541845676789 Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1);
/*
Math.random() * 10 → Generates a random floating number between 0 and 9.9999...
Math.floor(...) → Rounds down to the nearest whole number (integer) from 0 to 9
+1 → Shifts the range from 1 to 10
Example output: 1, 5, 10
*/



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
/*
  Math.random() * (max - min + 1)

(max - min + 1) calculates the range size. Here, max = 20, min = 10, so:
20 - 10 + 1 = 11
Math.random() * 11 generates a random number between 0 and 10.9999...
Math.floor(...)

Rounds down to the nearest integer, so now we get a number between 0 and 10
+ min

Shifts the range from 0-10 → 10-20
Example Outputs:
10, 12, 15, 20, etc.
*/
