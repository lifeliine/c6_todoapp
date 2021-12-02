const { v4: uuidv4 } = require('uuid');

class Task {
    id;
    title;
    done;
    created;
    finished;
    /*
    #id;
    #title;
    #done;
    #created;
    #finished;
    */

    constructor(title){
        this.id = uuidv4();
        this.title = title;
        this.done = false;
        this.created = new Date();
        /*
        this.#id = uuidv4();
        this.#title = title;
        this.#done = false;
        this.#created = new Date();
        */

    }
}

module.exports = Task;