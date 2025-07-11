const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map() is also callback function

// const newNums = (myNumbers.map( (num) => {return num + 10}));
// console.log(newNums);


// forEach Loop does not return the value
// const anOtherNums = (myNumbers.forEach( (num) => {
//     num + 10
//     console.log(num)
// }))
// console.log(anOtherNums)


const newNums = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)

console.log(newNums)