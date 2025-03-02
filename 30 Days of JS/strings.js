const name = "Tanushree"
const repoCount = 8

console.log(name + repoCount + " Value"); // Tanushree8 Value

console.log(`Hello my name id ${name} and my repo count is ${repoCount}`); // mordern way
// Hello my name id Tanushree and my repo count is 8

const gameName = new String('Tanu')
console.log(gameName[0]);

// console.log(gameName.__proto__); {}


// console.log(gameName.length);  //4 
// console.log(gameName.toUpperCase());

console.log(gameName.charAt());
console.log(gameName.charAt(2)); // n
console.log(gameName.indexOf('T')); // 0

const newString = gameName.substring(0, 4)
console.log(newString); // Tanu

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Tanushree    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove spaces from start,end 

const url = "https://tanushree115%20borase.twiit.com"

console.log(url.replace('%20', '-')) // https://tanushree115-borase.twiit.com

console.log(url.includes('sundar')) // false

console.log(gameName.split('-'));  
