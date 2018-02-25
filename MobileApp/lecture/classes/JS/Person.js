"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(DOB, name) {
        this.DOB = DOB;
        this.name = name;
    }
    /**
    *   Returns person age.
    */
    Person.prototype.getAge = function () {
        var now = new Date();
        var notYet = now.getMonth() < this.DOB.getMonth(); // mounth precision
        return now.getFullYear() - this.DOB.getFullYear() - (notYet ? 1 : 0);
    };
    //public toString = ():string => `${this.name} is ${this.getAge()} yers old.`
    Person.prototype.toString = function () {
        return this.name + " is " + this.getAge() + " yers old";
    };
    return Person;
}()); // Person
exports.Person = Person;
