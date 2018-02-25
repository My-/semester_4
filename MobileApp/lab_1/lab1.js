"use strict";
function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
// Exercise 1
var strLength = function (s) { return s.length; };
var word = 'By by c#';
console.log("Exercise 1: " + word + " length is: " + strLength(word));
// Exercise 2
var strLengthNoSpaces = function (s) { return s.replace(/ /g, "").length; };
console.log("Exercise 2: " + word + " length without spaces is: " + strLengthNoSpaces(word));
// Exercise 3
var countLetters = function (s, noSpaces) { return noSpaces ? strLengthNoSpaces(s) : strLength(s); };
console.log("\n    Exercise 3:\n        string is: " + word + ",\n        lenght no spaces: " + countLetters(word, true) + ",\n        lenght with spaces " + countLetters(word));
