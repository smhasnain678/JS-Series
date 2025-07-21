// singleton
// Object.create


// Object.literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Hasnain",
    "full name": "Muhammad Hasnain",
    [mySym]: "mykey1",
    age: 18,
    location: "hyderabad",
    email: "hasnain12@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// JsUser.email = "superHeros@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "superHeros@gmail.com"
console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello JS user")
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())