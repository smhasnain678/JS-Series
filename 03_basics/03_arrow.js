const user = {
    username: "hasnain",
    price: 890,

    //when we access current so we have to use (this. keyword)
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let userame = "hasnain"
//     console.log(this.username) 
// }

// chai()


// const chai = function () {
//     let userame = "hasnain"
//     console.log(this.username)
// }    

// chai()


// const chai = () => {
//     let userame = "hasnain"
//     console.log(this)
// }    

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// if we return object then we have to closed object in paranthesis
const addTwo = (num1, num2) => ({username: "hasnain"})



// console.log(addTwo(3, 4))
// const myArray = [2, 5, 4, 9]