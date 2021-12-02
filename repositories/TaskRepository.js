const Task = require('../modelo/Task');
const {getData, saveData} = require('../helpers1/fileManager');

class TaskRepository {
    #tasks;

    constructor(){
        const data = getData();
        if(data){
            this.#tasks = data;
        }else{
            this.#tasks = [];
        }
    }

    getAllTask(){
        return this.#tasks;

    }

    saveTask(title){ //Falta persistir datos en archivo
        const task = new Task(title);
        this.#tasks.push(task);
        saveData(this.#tasks);
        
    }

    deleteTask(){

    }

    completeTask(){

    }
}

module.exports = TaskRepository;