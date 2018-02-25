"use strict";
var Ford = /** @class */ (function () {
    function Ford() {
        this.year = 1980;
        this.seats = 4;
        this.make = "Ford";
    }
    Ford.prototype.displayInfo = function () { return "This is " + this.make; };
    return Ford;
}());
var myFord = new Ford();
console.log(myFord.displayInfo());
// const ford1:Ford = {year: 1990, seats:3, make:"Siera", }
myFord.make = 'siera';
console.log(myFord.displayInfo());
