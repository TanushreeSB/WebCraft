// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); output: { id: '123abc', name: 'Samy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tanushree",
            lastname: "Borase"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // Tanushree ( getting answer nested)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  output: { obj1 = {1: "a", 2: "b"},  obj2 = {3: "a", 4: "b"} }
// const obj3 = Object.assign({}, obj1, obj2, obj4) output: { '1': 'a', '2': 'b' , '3': 'a', '4':'b', '5': 'a', '6':'b' }
// Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.


const obj3 = {...obj1, ...obj2} // ... is spread operator
// console.log(obj3); output: { '1': 'a', '2': 'b' , '3': 'a', '4':'b' }


// values from database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser); output: { id: '123abc', name: 'Samy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); output: [ 'id', 'name', 'isLoggedIn' ] // datatype is array implies all keys taken and put as array imp.
// console.log(Object.values(tinderUser)); output: [ '123abc', 'Samy', false ]
// console.log(Object.entries(tinderUser)); output" [ [ [id', '123abc'], 'name', 'Samy'], ['isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "tanushree"
}

// course.courseInstructor 
// output: tanushree

const {courseInstructor: instructor} = course

// console.log(courseInstructor); // can write like this also when u don't add name instructor
console.log(instructor); // tanushree

// {
//     "name": "hitesh",
//     "coursename": "js in hindi", here it's written like JSON format
//     "price": "free"
// }

[
    {},  // we can get api's in this format also
    {},
    {}
]

// there are tools like JSON formatter to understand the API's.
