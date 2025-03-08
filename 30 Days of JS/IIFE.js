// Immediately Invoked Function Expressions (IIFE)
/*
An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing anonymous function. 
// standard IIFE
(function () {
  // statements…
})();

It contains two major parts:

1) A function expression. This usually needs to be enclosed in parentheses in order to be parsed correctly.
2) Immediately calling the function expression. Arguments may be provided, though IIFEs without arguments are more common.

IIFEs are a common pattern used to execute arbitrarily many statements in their own scope (and possibly return a value), in a location that requires a single expression.

Use cases of IIFEs include:

-> Avoiding polluting the global namespace by creating a new scope.
-> Creating a new async context to use await in a non-async context.
-> Computing values with complex logic, such as using multiple statements as a single expression.

*/


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// semicolon needed so that the one using arrow function executes

( (name) => { // using arrow function
    console.log(`DB CONNECTED TWO ${name}`);
} )('tanushree')
