//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var d = 55
    // console.log("INNER: ", a); // 10
    
}

// console.log(a); // 300
// console.log(b);
// console.log(d);  // 55


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // output: website is not defined (error)

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); here output only
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // 6

function addone(num){
    return num + 1
}



addTwo(5) // error
const addTwo = function(num){
    return num + 2
}
