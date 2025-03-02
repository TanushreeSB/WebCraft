myJSON = '["Ford", "BMW", "Fiat"]';
myArray = JSON.parse(myJSON);
/**************************************************************************\

  /*
1) Javascript array-copy operations create shallow copies.
2) Javascript arrays are zero-indexed.
  */

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // [0, 1, 2, 3, 4, 5,6] 
// myArr.push(7) // [0, 1, 2, 3, 4, 5,6,7]
// myArr.pop() // [0, 1, 2, 3, 4, 5,6]

// myArr.unshift(9) puts 9 at start of the array, shift elements by one position [0,0, 1, 2, 3, 4, 5]
// myArr.shift() // [0, 1, 2, 3, 4, 5]

// console.log(myArr.includes(9)); false
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9)); // -1

// const newArr = myArr.join()

// console.log(myArr); [0, 1, 2, 3, 4, 5]
// console.log( newArr); 0,1,2,3,4,5
// console.log(typeOf newArr); string

// slice, splice imp

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) 

console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr); // [ 0, 4, 5 ]
console.log(myn2);  // [ 1, 2, 3 ]
