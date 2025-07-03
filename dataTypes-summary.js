// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
// return type Number

const isLoggedIn = false
//return type Boolean

const outsideTemp = null
// return type object, This is unique

const id = Symbol('123')
const anotherId = Symbol('123');
// return type Symbol

console.log(id === anotherId);

const bigNumber = 2347384739230383n;
// return type bigint



// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["spiderman", "batman", "avengers"];
// return type object

let myObj = {
    name: "Hasnain",
    age: 22
}
// return type object

const myFunction = function(){
    console.log("Hello world");
}
// retuen type function but its also called function object

console.log(typeof heros);



// +++++++++++++++ Memory ++++++++++++++++++++

// Stack (Primitive datatypes), Heap (Non-Primitive)

let myName = "MuhammadHasnain";

let anotherName = myName;
anotherName = "smhasnain"

// console.log(anotherName)
// console.log(myName)

let userOne = {
    email: "user@gmaul.com",
    upi: "user@ubl"
}

let userTwo = userOne;

userTwo.email = "2k23/SWE/105@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); 