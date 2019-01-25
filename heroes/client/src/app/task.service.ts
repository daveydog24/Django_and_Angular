import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  tasks = [
    {
      "task": "Learn Django",
      "isComplete": true 
    },
    {
      "task": "Learn Angular",
      "isComplete": true 
    },
    {
      "task": "???",
      "isComplete": false 
    },
    {
      "task": "Profit!",
      "isComplete": false 
    }
  ];

  getTasks(cb){
    return cb(this.tasks);
  }

  addTask(task, cb){
    this.tasks.push(task);
    cb();
  }

  removeTask(task, cb){
    for(let i=0; i<this.tasks.length; i++){
      if(this.tasks[i] == task){
        this.tasks.splice(i, 1);
        break;
      }
    }
    cb();
  }

  updateTask(task, update, cb){
    for(let i=0; i<this.tasks.length; i++){
      if(this.tasks[i] == task){
        this.tasks[i] = update;
        break;
      }
    }
    cb();
  }

}