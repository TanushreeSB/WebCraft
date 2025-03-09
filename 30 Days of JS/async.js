The keyword async before a function makes the function return a promise:
Example
async function myFunction() {
  return "Hello";
}

this is Synchronous JS 
JS can also be single threaded
both of these are default behaviour of JS

Execution context: executes one line of code at a time

blocking code- block the flow of program -> read file sync
Non Blocking code- does not block execution -> read file Async

Basic Syntax
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();


