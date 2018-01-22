
function addition(value: string){
    console.log(`Value is: ${value}`)
}

const firstVal: number = 42
const secondVal: number = 1
let sumOfVals: string = (firstVal +secondVal).toLocaleString()

addition(sumOfVals)

// Exercise 1
const strLength = (s: string) => s.length
let word: string = 'By by c#'
console.log(`Exercise 1: ${word} length is: ${strLength(word)}`)

// Exercise 2
const strLengthNoSpaces = (s: string) => s.replace(/[ ]/, "").length
console.log(`Exercise 2: ${word} length without spaces is: ${strLengthNoSpaces(word)}`)
