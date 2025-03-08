const user = {
    username: "tanushree",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this for current context
        console.log(this);
    }

}

// user.welcomeMessage()  
// user.username = "sam"
// user.welcomeMessage() // output: [Function: welcomeMessage]

// console.log(this); // {} // this is empty object
// but in browserit will give window{ ..content}
// window is object in browser



// function chai(){
//     let username = "hitesh"
//     console.log(this); many values come on calling chai() function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); //  undefined, arrow functio
}


// chai() // function calling

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // 7

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // { username = "hitesh" }


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 
