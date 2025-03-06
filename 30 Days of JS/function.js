function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("E");
  
}

// sayMyName() executes

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers(3, "5") output: 35
// if numbers given as parameters are eg: (3,null) then output: 3

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // console.log("Tanu") // output: Tanu , this will only print when this line is writtern befor returning result, printing after it would not give deaired output  
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); output: 8


function loginUserMessage(username = "sam"){
 /*   if(!username){ // means username = undefined
        console.log("PLease enter a username");
        return
    } */ 
  //if i uncomment then the output would be:
  // Please enter a username
  // undefined

    return `${username} just logged in`
}

// console.log(loginUserMessage("tanushree")) output: tanushree just logged in
// console.log(loginUserMessage()) output: undefined just logged in 


function calculateCartPrice(...num1){ // ... is rest operator ( because of usage called rest operator) imp ... otherwise without it only 200 would have been printed
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) output: [ 200, 400, 500, 2000 ]

function calculateCartAmount(val1,val2, ...num1){ // ... is rest operator ( because of usage called rest operator) imp ... otherwise without it only 200 would have been printed
    return num1
}

// console.log(calculateCartAmount(200, 400, 500, 2000)) output: [ 500, 2000 ]


const user = {
    username: "tanushree",
    price: 599 // if u give prices: 599 (then it will be printed undefined) 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) output: Username is tanushree and price is 599

handleObject({
    username: "sam",
    price: 399
}) // output: Username is sam and price is 399 (other way to pass objects)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); output: 400
console.log(returnSecondValue([200, 400, 500, 1000])); // output: 400
