import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private _taskService: TaskService) { }

  tasks = [];
  mode = 'all';

  ngOnInit() {
    this.getAll('');
  }

  getAll(e){
    this.setActive(e);
    this.mode = 'all';
    this._taskService.getTasks( (data) => {
      this.tasks = data;
    });
  }

  getComplete(e){
    this.setActive(e);
    this.mode = 'complete';
    this._taskService.getTasks( (data) => {
      this.tasks = [];
      for(let task of data){
        if(task.isComplete){
          this.tasks.push(task);
        }
      }
    });
  }

  getActive(e){
    this.setActive(e);
    this.mode = 'active';
    this._taskService.getTasks( (data) => {
      this.tasks = [];
      for(let task of data){
        if(!task.isComplete){
          this.tasks.push(task);
        }
      }
    });
  }

  remove(task){
    this._taskService.removeTask(task, () => {
      if (this.mode == "all") {
        this.getAll('');
      }else if (this.mode == 'complete') {
        this.getComplete('');
      }else if (this.mode == 'active') {
        this.getActive('');
      }
    });
  }

  changeStatus(task){
    let update = task;
    update.isComplete = !task.isComplete;
    this._taskService.updateTask(task, update, () => {
      if (this.mode == "all") {
        this.getAll('');
      }else if (this.mode == 'complete') {
        this.getComplete('');
      }else if (this.mode == 'active') {
        this.getActive('');
      }
    });
  }

  setActive(e){
    if(e){
      let siblings = e.target.parentNode.parentNode.children;
      for(let sibling of siblings){
        sibling.classList.remove('is-active');
      }
      e.target.parentNode.classList.add('is-active');
    }
  }

}