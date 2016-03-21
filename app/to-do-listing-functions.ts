/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {

        descriptions.push(task.description);
        descriptions.push(task.priority);

      }
    }
    return descriptions;
  }
  export var listAllTasksForType = function(tasktype: string,
    taskCollection: Task[]): String[] {
      var tasks: String[] = [];
      for(var taskDescription of taskCollection){
        console.log(taskDescription.constructor.name);
        if(taskDescription.constructor.name === tasktype){
          tasks.push(taskDescription.description);
        }
      }
      console.log("Task Name Testing");
      console.log(tasks);
      return tasks;
    }

    export var listAllTasksForPriority = function(assignee: string, taskCollection: Task[]): String[] {
      var taskPriorities: String[] = [];
      for(var taskDescription of taskCollection){
        if(taskDescription.priority === assignee){
          taskPriorities.push(taskDescription.description);
        }
      }
      console.log("Task Priority Testing");
      console.log(taskPriorities);
      return taskPriorities;
    }
}
