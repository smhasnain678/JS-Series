function myName() {
    console.log("h")
    console.log("a")
    console.log("s")
    console.log("n")
    console.log("a")
    console.log("i")
    console.log("in")
}

// myName()
// function addTwoNumbers(number1, number2, number3){
//     console.log(number1 + number2 + number3)
// }

// addTwoNumbers(5,8, "7")


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(5,3)

// console.log("Result: ", result)


function loginUserMessage(userame = "sam"){
    if (!userame) {
        console.log("Please enter a username")
        return
    }
    return `${userame} just logged in`
}

// console.log(loginUserMessage("hasnain"))
// console.log(loginUserMessage("Hasnain"))


function calculateCartPrice(val1, val2, val3, ...num1){  // rest operator (...)
    return num1
}
// console.log(calculateCartPrice(200, 300, 500, 230, 600, 980, 400))

// how to use and pass the object in function
const user = {
    userame: "hasnain",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userame} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    userame: "sam",
    price: 90
})

// how to use and pass the array in function
const myNewArray = [200, 300, 400, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 1000, 500]))