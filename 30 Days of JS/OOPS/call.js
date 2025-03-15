function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called"); // called
}

function createUser(username, email, password){
    SetUsername.call(this, username) // this is needed to hold the reference
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // createUser { email: chai@fb.com', password: '123' } prints when line 8 is not written
// createUser { username: 'chai', email: chai@fb.com' , password: '123' } when 8 is eritten
