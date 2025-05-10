function x(){
  var i = 1;
  setTimeout(function () {
      console.log(i);
  },3000);
  console.log("Namaste India");
}

// output: 1 ( it prints after 3 sec timeout)

**************************************************************************************************************************************************************

function x(){
  for(var i = 0; i <= 5; i++){
    setTimeout(function () {
        console.log(i);
    },i*1000);
  }
  
  console.log("Namaste India");
}
x();

// output:
/*
Namaste India
6
6
6
6
6
*/
/*
Why This Happens:
var and Function Scope:

var is function-scoped, not block-scoped. So, i is hoisted to the top of the function x(), and there's only one i shared across all loop iterations.

How setTimeout Works:

setTimeout is asynchronous. The callback inside it runs after the loop has finished executing.

By the time the first setTimeout callback runs (after 0ms), the loop has already completed, and i has reached 6 (since the loop runs while i <= 5 and stops when i = 6).

Closure Behavior:

All setTimeout callbacks reference the same i (due to var scoping).

Since the loop finishes before any setTimeout runs, every console.log(i) sees i = 6.

Order of Execution:

console.log("Namaste India") runs immediately after the loop (synchronously), so it appears first.

Then, after delays of 0ms, 1000ms, 2000ms, etc., each setTimeout callback runs, printing 6.

*/

************************************************************************************
/*
Fixing the Issue:
To print 0, 1, 2, 3, 4, 5, you can:

Use let (block-scoped) instead of var:
for(let i = 0; i <= 5; i++) { ... }
*/

  // output:
/*
Namaste India
1
2
3
4
5

*/

**************************************************************************************************************

// other way than to use let
function x(){
  for(var i = 0; i <= 5; i++){
    function close(x) {
      setTimeout(function () {
          console.log(x);
      }, x*1000);
    }
    close(i);
  }
  console.log("Namaste India");
}
x();

/*
output:
Namaste India
1
2
3
4
5
/*

/*

The close(x) function takes x as an argument, which is a copy of i at that moment.

Since x is scoped to the close function, each call to close(i) creates a new x that retains its value inside setTimeout.

Why It Works:
var i is still function-scoped, but now:

close(i) is called immediately in each iteration, passing the current i as x.

Since x is a parameter, it creates a new binding for each call to close(x).

Closure Preserves x:

The setTimeout callback inside close(x) closes over x, not i.

Even though i changes, x remains fixed for each setTimeout.

Execution Order:

"Namaste India" logs first (synchronous).

Then, after 0s, 1s, 2s, etc., each setTimeout runs with its own x (0, 1, 2, etc.).

*/
