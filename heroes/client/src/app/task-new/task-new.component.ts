import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  task = {'task': '', 'isComplete': false};

  constructor(private _taskService: TaskService) {
  }

  ngOnInit() {
  }

  createTask(){
    this._taskService.addTask(this.task, () => {
      this.task = {'task': '', 'isComplete': false};
    });
  }

}
