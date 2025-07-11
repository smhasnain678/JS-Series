const coding = ["javascript", "ruby", "java", "python", "cpp"]


// forEach does not return the value
const values = coding.forEach( (item) => {
    console.log(item)
    return item
})

console.log(values)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// filter is also taking call back function

// In this no need to write return keyword because there is no scope
// const newNums = myNums.filter( (num) => num > 4)

// if we are using {} scope so we have to write return keyword
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })


// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books = [
    {
        title: "JavaScript: The Good Parts",
        genre: "Programming",
        publishYear: 2008,
        edition: 1
    },
    {
        title: "Eloquent JavaScript",
        genre: "Programming",
        publishYear: 2018,
        edition: 3
    },
    {
        title: "You Don’t Know JS",
        genre: "Programming",
        publishYear: 2015,
        edition: 1
    },
    {
        title: "Clean Code",
        genre: "Software Engineering",
        publishYear: 2008,
        edition: 1
    },
    {
        title: "The Pragmatic Programmer",
        genre: "Software Engineering",
        publishYear: 1999,
        edition: 1
    },
    {
        title: "Rich Dad Poor Dad",
        genre: "History",
        publishYear: 1997,
        edition: 1
    },
    {
        title: "Atomic Habits",
        genre: "Self-Help",
        publishYear: 2018,
        edition: 1
    },
    {
        title: "Deep Work",
        genre: "History",
        publishYear: 2016,
        edition: 1
    },
    {
        title: "The Alchemist",
        genre: "History",
        publishYear: 1988,
        edition: 2
    },
    {
        title: "Sapiens",
        genre: "Fiction",
        publishYear: 2011,
        edition: 1
    }
];


let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter((bk) => {
    return bk.publishYear >= 1995 && bk.genre === 'Software Engineering'
})

// console.log(userBooks)