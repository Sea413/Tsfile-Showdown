console.log("Further to.js testing");

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask(description, priority, assignedTo) {
        _super.call(this, description, priority);
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return HomeTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return WorkTask;
}(Task));
var diane = {
    name: "Diane D",
    email: "diane@epicodus.com"
};
var thor = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
};
var loki = {
    name: "God of mischief",
    email: "loki@geocities.com"
};
var tasks = [];
tasks.push(new HobbyTask("collect legos"));
tasks.push(new WorkTask(today, "go to meeting", "high", diane));
tasks.push(new HomeTask("do the dishes", "high", thor));
tasks.push(new HomeTask("buy chocoloate", "low", loki));
tasks.push(new HomeTask("wash the laundry", "high"));
tasks[0].markDone();
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
console.log(tasks);
console.log("to-do.js testing");
