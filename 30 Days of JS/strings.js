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
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanushree115.twiit.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
