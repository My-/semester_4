var arr = ['Task one'];
var task = function (task) {
    arr.push(task);
    console.log("Added \"" + task + "\" to array.");
    return arr.length;
};
var listAllTasks = function () { return arr.forEach(function (it) { return console.log(it); }); };
var deleteTask = function (s) {
    var tArr = arr.filter(function (it) { return it !== s; });
    arr = tArr;
    console.log("\n        Deleted \"" + s + "\" from array.\n        Array now: " + arr);
};
console.log("Array: " + arr);
task('Run Fast');
task('Run Even Faster');
task('Go home');
console.log("Tasks at the moment are:");
listAllTasks();
deleteTask('Run Fast');
listAllTasks();
