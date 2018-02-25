"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var myDOB = Date.parse("December 17, 1980"); // https://www.w3schools.com/jsref/jsref_parse.asp
var myName = 'Mindugas';
var myCourse = 'Software Development';
var me = new Student_1.Person(new Date(myDOB), myName);
console.log(me); // prints object (no toString() call)
console.log(me + ""); // prints object (use toString())
console.log(me + "."); // prints object (use toString())
console.log(me.toString());
console.log(me.getAge());
var meStudent = new Student_1.Student(new Date(myDOB), myName, myCourse);
console.log(meStudent + ".");
