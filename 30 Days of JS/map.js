const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
console.log(myNumers);
/*
output:
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]

remeber when opening scope{} we need to use return keyword.
*/


const newNums = myNumers
                .map((num) => num * 10 )  // we are using chaining
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
/*
OUTPUT:
[
  41, 51,  61, 71,
  81, 91, 101
]
*/
