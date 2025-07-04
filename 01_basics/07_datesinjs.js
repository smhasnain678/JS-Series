// Dates

let myDate = new Date()
// console.log(myDate.toJSON())
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(typeof myDate)

// const myCreateDate = new Date(2025, 7, 4)
// const myCreateDate = new Date(2025-7-4)
// const myCreateDate = new Date(2025, 0, 23, 5, 3)
const myCreateDate = new Date("2025-07-04")
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date() 
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

const weekDay = newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(weekDay)