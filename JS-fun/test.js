const myArray = [1, 2, 3, 4, 5]
//%DebugPrint(myArr)

// continuous, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)


// PACKED_SMI_ELEMENTS
const myArr = [1, 2, 3, 4, 5]

// PACKED_DOUBLE_ELEMENTS
myArr.push(6.0)

// PACKED_ELEMENTS
myArr.push('7')

// HOLEY_ELEMENTS
myArr[10] = 11


console.log(myArr)
console.log(myArr.length)
console.log(myArr[9])

// If there is holey array we have to define following prperty to check
// bound check
// hasOwnProperty(myArr, 9)
// hasOwnProperty(myArr.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in javascript

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[8])

// SMI > DOUBLE > PACKED => Continuous
// H_SMI > H_DOUBLE > H_PACKED => Holey

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS
console.log(arrFour)

// It's better approach according to ranking
// Ranking: // SMI > DOUBLE > PACKED => Continuous
const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN) // It's Make PACKED_DOUBLE
arrSix.push(Infinity) // It's Make PACKED_DOUBLE

// prefer to use these loops
// for, forOf, forEach