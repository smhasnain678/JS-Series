const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [ 4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// console.log(Array.isArray("Hasnain"))
// console.log(Array.from("Hasnain"))
// console.log(Array.from({name: "hasnain"})) // Important for interview question

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3))


// const cars = [];
// cars[0] = "Toyota"
// cars[1] = "Suzuki"
// cars[2] = "Mercedes"
// console.log(cars)


// const cars = ["Saab", "Volvo", "BMW"];
// let car = cars[0];
// console.log(car)


// const cars = ["Saab", "Volvo", "BMW"];
// cars[1] = "Opel";
// console.log(cars)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 2];
// console.log(fruit)


// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits


// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
// console.log(fruits)
// output
// [ 'Banana', 'Orange', 'Apple', <3 empty items>, 'Lemon' ]



// const points = [40];
// is not the same as:
// const points = new Array(40);
// console.log(points)




// const fruits = ["Banana", "Orange", "Apple"];
// // let type = typeof fruits;
// console.log(Array.isArray(fruits))


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(" and "))

// remove last element and The pop() method returns the value that was "popped out":
// Means (Mango)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop())


// The push() method adds a new element to an array (at the end):
// The push() method returns the new array length:
// Means (5)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.push("Kiwi");
// console.log(length)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.unshift("lemon"));


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits)
