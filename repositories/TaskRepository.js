const Task = require('../modelo/Task');

class TaskRepository {
    #tasks;

    constructor(){
        this.#tasks = [];
    }

    getAllTask(){

    }

    saveTask(title){
        const task = new Task(title);
        this.#tasks.push(task);
    }

    deleteTask(){

    }

    completeTask(){

    }
}