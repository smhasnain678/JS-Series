let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index += 2
}


let myArray = ["flash", "superman", "batman"]
let arr = 0

while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`)
    arr = arr + 1
}



// In Do-while loop first => work done then => condition check
let score = 11

// do {
//     console.log(`Score is ${score}`)
//     score++
// } while (score <= 10);



// Questions (for loops)
// Easy (1–5)

for (let i = 1; i <= 10; i++) {
    // console.log(`The value of ${i}`)
}

for (let i = 2; i <= 20; i = i + 2) {
    // console.log(`The value of ${i}`)
}

for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
}

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum  += i;
}
// console.log("Sum of numbers from 1 to 100 is:", sum);

// let fruits = ["apple", "banana", "mango", "orange"];
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     // console.log(element)
// }

// Questions (for loops)
// Medium (6–10)
// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(fact);

for (let i = 1; i < 50; i = i + 2) {
    // console.log(`The value of ${i}`)
}

// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log("Reversed string:", reversed);


// let numbers = [3, 7, 1, 9, 4];
// let max = numbers[3]; // Assume first number is the largest

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i]; // Update max if current number is greater
//   }
// }

// console.log("Maximum number is:", max);

let colors = ["red", "green", "blue"];

for (let i = colors.length - 1; i >= 0; i--) {
    // console.log(colors[i])
}


let num = 29;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break; // no need to check further
    }
  }
}

if (isPrime) {
//   console.log(`${num} is a prime number`);
} else {
//   console.log(`${num} is not a prime number`);
}


let str = "JavaScript is awesome!";
let count = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    count++;
  }
}

// console.log("Number of vowels:", count);


let rows = 5;

for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
