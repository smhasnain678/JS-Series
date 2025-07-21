// Singleton Object
// const tinderUser = new Object()

// Non-singleton object
const tinderUser = {}

tinderUser.id = "2390sd"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "sunny@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Muhammad",
            lastname: "Hasnain"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// // const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "user@hmail.com"
//     },
//     {
//         id: 2,
//         email: "user@hmail.com"
//     },
//     {
//         id: 3,
//         email: "user@hmail.com"
//     },
//     {
//         id: 4,
//         email: "user@hmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLogged'))



const course = {
    coursename: "Blockchain",
    price: "8999",
    courseInstructor: "Youtube"
}

// console.log(course["courseInstructor"])

const {courseInstructor: instructor} = course;
// console.log(courseInstructor)
console.log(instructor)


// de-structuring
// const navbar = ({company}) => {

// }

// navbar(company = "Hasnain")


// {
//     "name": "Hasnain",
//     "coursename": "javascript",
//     "price": "free"
// }


[
    {},
    {},
    {}
]