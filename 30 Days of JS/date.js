// Dates
/*
JavaScript Date objects represent a single moment in time in a platform-independent format.…
…A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which is defined…
*/

let myDate = new Date()
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); object


// let myCreatedDate = new Date(2023, 0, 23) 0 for month(Jan)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") // MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); value in milli seconds
// console.log(Math.floor(Date.now()/1000)); value in seconds, math.floor to remove decimal

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    // we can write timeZone too
})
/*
    newDate: This is assumed to be a Date object in JavaScript, representing a specific date and time.

toLocaleString(): This method converts the date to a string, using locale-specific conventions (e.g., language, formatting rules).

'default': This specifies the locale to use. 'default' means the method will use the browser's or runtime's default locale (usually based on the user's system settings).

{ weekday: "long" }: This is an options object that customizes the output. Specifically:

weekday: "long" tells the method to include the full name of the day of the week (e.g., "Monday", "Tuesday") in the output.
    */
