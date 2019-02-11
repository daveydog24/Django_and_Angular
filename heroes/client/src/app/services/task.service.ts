import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    constructor() {}
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

    getTasks(callback){
        return callback(this.tasks);
    }

    addTask(task, callback){
        this.tasks.push(task);
        callback();
    }

    removeTask(task, callback){
        // what you should use to delete and get the id
        // return this._http.delete(`/tasks/${task.id}`, task)
        for(let i=0; i<this.tasks.length; i++){
            if(this.tasks[i] == task){
                this.tasks.splice(i, 1);
                break;
            }
        }
        callback();
    }

    updateTask(task, update, callback){
        for(let i=0; i<this.tasks.length; i++){
            if(this.tasks[i] == task){
                this.tasks[i] = update;
                break;
            }
        }
        callback();
    }
}