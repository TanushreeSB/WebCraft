const user = {
    username: "tanushree",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); // this used for current context // here all of const user prints
    }

}



//console.log(user.username) // tanushree
//console.log(user.getUserDetails()); 
// console.log(this); // {}


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`); 

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne); // username: ChaiAurCode (values override) when new Keyword is not written
console.log(userOne.constructor); // [ Functions: User ]
//console.log(userTwo);
