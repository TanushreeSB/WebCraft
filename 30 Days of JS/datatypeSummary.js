// Primitive
// call by value

// 7 Types: String,Number,Boolean,null,undefined,Symbol(used to make value unique),BigInt

const score = 100;

const outsideTemp = null;
/*
JavaScript is a dynamic type language. In dynamically typed languages, the type of a variable is checked during runtime, as opposed to static type languages, where types are checked during compile time. This means that in JavaScript, you do not need to explicitly declare the data type of a variable, and a variable can hold values of different types during its lifetime.
*/

const id = Symbol('123') 
const id2 = Symbol('123')

console.log(id === id2) // false

const bigNumber = 23456789999999912n // convert to BigInt

const heros = ["Kartik","Piyush","Aman"];
let myObj = {
    name: "Tanushree",
    age: 20,
}

const myFunction = function(){
    console.log("Hello Duniya");
}

console.log(typeof bigNumber) // undefined
console.log(typeof outsideTemp) // object
console.log(typeof myFunction) // function
console.log(typeof heros) // object
console.log(typeof id2) // symbol


// Reference ( Non primitive)
// Array, Objects, Functions


