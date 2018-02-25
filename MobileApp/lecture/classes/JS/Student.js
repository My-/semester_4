"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Person_2 = require("./Person");
exports.Person = Person_2.Person;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(DOB, name, course) {
        var _this = _super.call(this, DOB, name) || this;
        _this.course = course;
        return _this;
    }
    Student.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " doing " + this.course + " course";
    };
    return Student;
}(Person_1.Person));
exports.Student = Student;
