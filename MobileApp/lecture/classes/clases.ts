
import {Person, Student} from './Student'


const myDOB = Date.parse("December 17, 1980") // https://www.w3schools.com/jsref/jsref_parse.asp
const myName = 'Mindugas'
const myCourse = 'Software Development'
const me = new Person(new Date(myDOB), myName)

console.log(me)         // prints object (no toString() call)
console.log(me +"")     // prints object (use toString())
console.log(`${me}.`)   // prints object (use toString())
console.log(me.toString())
console.log(me.getAge())

const meStudent = new Student(new Date(myDOB), myName, myCourse)

console.log(`${meStudent}.`)
