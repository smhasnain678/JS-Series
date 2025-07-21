// 1) Promise Creation 
// 2) Promise Consumption

// Promise creation
const promiseOne = new Promise(function (resolve, reject) {
    // Do as async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete')
        resolve()
    }, 1000);
})

// Promise Consumption
promiseOne.then(function () {
    console.log("Promise consumed")
})

// Promise Two
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved")
})


// Promise Three
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Hasnain", email: "hasnain@example.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user)
})

// Promise Four
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Hasnain", password: "1234" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error)
    }).finally(() => console.log("The promise is either resolved or rejected"))


// Promise Five
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "1234" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers();


fetch('https://api.github.com/users/smhasnain678')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))