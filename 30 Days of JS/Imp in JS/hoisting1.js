getName() // Namsate India

console.log(x);

var x = 7;

function getName(){
    console.log("Namsate India")
}

console.log(getName) // here it will print the entire function itself fname(){  console.log("Namsate India") }

*****************************************************************************


getName() // Namsate India

console.log(x);
console.log(getName) //here also it will print the entire function itself fname(){  console.log("Namsate India") }
var x = 7;

function getName(){
    console.log("Namsate India")
}

************************************************************************************

getName() // error

console.log(x);
console.log(getName) 
var x = 7;

function getName = () => { // this arrow function behaves just like another variable, so getName() gives error 
 // this arrow function is saved as undefined
    console.log("Namsate India")
}
