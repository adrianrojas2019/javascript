// This is a single line comment

/*

block comment

*/

console.log('Hello')

//2. Having the following string "fds76f8ds6f7 67fds6f7 67fsd67"
//get the sumatory of the numbers inside of the string

let testString = 'fds76f8ds6f7 67fds6f7 67fsd67'

let usingSplit = testString.split('')
console.log(usingSplit.length)

let total=0

for (let i=0; i < usingSplit.length; i++) {
    // if is numeric count
    if (Number.isInteger(parseInt(usingSplit[i]))) {
        total = total + parseInt(usingSplit[i])
    }
}

console.log("Total is: " + total)

//3. Having the following string “VL is a great company, VL has great ppl”
//Find the amount of times that every single word is showing up in the string

let string = 'VL is a great company, VL has great ppl'

let tmpArray = string.split(' ')
let temp = ''
let total2
let ocurrence = []

for (let i=0; i < tmpArray.length;i++) {
    console.log(tmpArray[i])
    temp = tmpArray[i]
    total2 = 0
    for(let j=0; j < tmpArray.length;j++){
        if (temp == tmpArray[j]) {
            total2 = total2 + 1
        }
    }
    ocurrence.push(temp, total2)
}

console.log(ocurrence)

console.log("Type Value is: " + typeof ocurrence)