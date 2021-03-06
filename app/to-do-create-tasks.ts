/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

console.log("testing");

var people = ToDoList.people;
// var priority = ToDoList.priority;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);

var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("here are thor's tasks: ")
for(var testing5 of thorTasks){
  console.log(testing5);
}
console.log("testing");

var taskCategories = ToDoList.listAllTasksForType("WorkTask", tasks);
console.log(tasks);
for(var task1 of taskCategories) {
console.log(task1);
}

var taskPriorities = ToDoList.listAllTasksForPriority("High", tasks);
console.log(tasks);
console.log("super Test");
for(var task1 of taskPriorities) {
}


// $(document).ready(function() {
//   event.preventdefault();
//   var dangerZone = taskPriorities;
//   console.log("test");
//   $("#tasklist").html(dangerZone);
// });
