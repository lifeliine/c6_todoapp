const{inquirerMenu, inquirerInput} = require('./helpers1/inquirer');
const TaskRepository = require('./repositories/TaskRepository');

const main = async () => {
   
    
    const taskRepository = new TaskRepository();
    let optionUser;

    do{
        optionUser = await inquirerMenu();

        switch (optionUser) {
            case 1:
                const title = await inquirerInput('Task title: ');
                taskRepository.saveTask(title);
                break;
     
             case 2:
                 const alltasks = taskRepository.getAllTask();
                 console.log(alltasks); //para mostrar el array de tareas de esta forma
                                        //la clase task tiene que ser publica o tendria que crear getters y un metodo para mostrar
                 break;
        }
    } while(optionUser != 3);

}

main();