// var c = 300

// let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const userame = "hasnain"

    function two() {
        const website = "youtube"
        // console.log(userame)
    }
    // console.log(website)

    two()
}

one()

if (true) {
    const userame = "hasnain"
    if (userame === "hasnain") {
        const website = " youtube"
        // console.log(userame + website)
    }
    // console.log(website)
}
// console.log(userame)



// ++++++++++++++++++ Interesting +++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}



console.log(addTwo(5))
const addTwo = function addone(num){
    return num + 1
}
