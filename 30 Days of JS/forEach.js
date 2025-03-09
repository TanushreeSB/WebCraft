const coding = ["js", "ruby", "java", "python", "cpp"]

// The forEach() method of Array instances executes a provided function once for each array element.
// coding.forEach( function (val){
//     console.log(val);
// } )

/* output:
js
ruby
java
python
cpp
*/


// coding.forEach( (item) => {
//     console.log(item); /// same output as above
// } )

// function printMe(item){
//     console.log(item); // same output as above
// }

// coding.forEach(printMe) // giving reference to function

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr); // 
// } )
/*
output:
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
/*
    output:
    javascript
    java
    python
*/
