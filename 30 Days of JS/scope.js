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
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
