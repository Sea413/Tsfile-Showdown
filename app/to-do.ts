interface IPerson {
  name: string;
  email: string;
}

interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}

class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone(){
    this.done = true;
  }
}
class HomeTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority);
  }
}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
    super(description, priority, assignedTo);
  }
}

var diane: IPerson = {
  name: "Diane D",
  email: "diane@epicodus.com"
}

var thor: IPerson = {
  name: "Thor Son of Odin",
  email: "thor@asgard.com"
}

var loki: IPerson = {
  name: "God of mischief",
  email: "loki@geocities.com"
}

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
