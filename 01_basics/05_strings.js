const name = "hasnain";
const repoCount = 25;

console.log(name + repoCount + " Value");


// Prefer to use this syntax back tick => (``)
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('smhasnain-has-ch');

// console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// charAt()
console.log(gameName.charAt(4));

// indexOf()
console.log(gameName.indexOf('h'));

// substring()
const newString = gameName.substring(0, 5);
// console.log(newString);

// slice()
const anotherString = gameName.slice(-9, 6);
console.log(anotherString)


const newStringOne = "   hasnain    "
console.log(newStringOne);
// trim()
console.log(newStringOne.trim());


const url = "https://github.%789/smhasnain678"
// replace()
console.log(url.replace('%789', 'com'))


// if we want to know this keyword is available in url or any strings
//includes()
console.log(url.includes('smhasnain789'))


// split()
console.log(gameName.split('-'))


// at() It allows the use of negative indexes while charAt() do not.
console.log(gameName.at(-1))


// concat()
const firstName = "Muhammad"
const lastName = "Hasnain"
console.log(firstName.concat(" ", lastName)) //output Muhammad Hasnain
console.log(firstName.concat(", ", lastName)) //output Muhammad, Hasnain


// Endswith // Its gives boolean True/False
const str1 = "Cats are the best!";
console.log(str1.endsWith("best!"));
// Expected output: true


// match()
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[a-e]/g;
const matches = str.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']


// PadStart
const text1 = "5";
console.log(text1.padStart(2, "0"));
// Expected output: "05"


// PadEnd
const anotherText1 = "Breaded Mushrooms";
console.log(anotherText1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"


// repeat()
const mood = "Happy! ";
console.log(`I feel ${mood.repeat(89)}`);
// Expected output: "I feel Happy! Happy! Happy! "

// replaceAll()
const linePara = "I think Ruth's dog is cuter than your dog!";
console.log(linePara.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"