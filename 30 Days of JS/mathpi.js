const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
/* Output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // output: 3.141592653589793

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false, // here we changed it
    enumerable: true,
    
})
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { // write this so that code does not break because of 22 line
        
        console.log(`${key} : ${value}`);
    }
}
/*
name : ginger chai
price : 250
isAvailable : true
*/
