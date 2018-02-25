var myTest = /** @class */ (function () {
    function myTest() {
        var _this = this;
        this.arr = [];
        this.addTask = function (task) { return _this.arr.push(task); };
        this.listAllTAsks = function () {
            return console.log("Tasks are: " + _this.arr + ". Total: " + _this.arr.length);
        };
    }
    myTest.prototype.deleteTask = function (task) {
        this.arr = this.arr.filter(function (it) { return it !== task; });
        return this.arr.length;
    };
    return myTest;
}());
var testas = new myTest();
var task1 = 'Task One';
var task2 = 'Task Two';
var task3 = 'Task Three';
console.log("Adding \"" + task1 + "\": " + testas.addTask(task1));
console.log("Adding \"" + task2 + "\": " + testas.addTask(task2));
console.log("Adding \"" + task3 + "\": " + testas.addTask(task3));
testas.listAllTAsks();
console.log("Deleting \"" + task2 + "\": " + testas.deleteTask(task2));
testas.listAllTAsks();
