// if
const isUserLoggedIn = true;

// if(2 === "2"){
//     console.log("executed")
// }


// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test 2")

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 990")
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}