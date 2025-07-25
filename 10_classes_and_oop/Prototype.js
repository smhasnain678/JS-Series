// let myName = "Hasnain     "

// console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.hasnain = function(){
    console.log(`Hasnain is present in all objects`)
}

Array.prototype.heyhasnain = function(){
    console.log(`Hasnain says hello`)
}

// heroPower.hasnain()
// myHeros.hasnain()
// myHeros.heyhasnain()
// heroPower.heyhasnain()


// Prototyple Inheritance
const User = {
    name: "user",
    email: "user@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anOtherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True Length is ${this.trim().length}`)
}

anOtherUsername.trueLength()
"Hasnain".trueLength()
"iceTea".trueLength()