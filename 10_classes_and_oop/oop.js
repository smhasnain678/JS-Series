const user = {
    username: "hasnain",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from Database")
        //console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user["signedIn"])
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = function () {
        console.log(`Welcomw ${this.username}`)
    }

    // we dont need to return this keyword, It implicitly knows 
    return this
}

// Constructor give us new instances
const userOne = new User("Hasnain", 12, true)
const userTwo = new User("JavaScript", 15, false)
console.log(userOne.constructor)
// console.log(userTwo)