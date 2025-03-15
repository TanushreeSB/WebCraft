class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static restricts acesss to the method
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) // 123

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
// username: iphone
