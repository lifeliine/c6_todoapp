const inquirer = require('inquirer');

const inquirerMenu = async() =>{
    console.log('=================');
    console.log('Select an option:')
    console.log('=================');

    const menu = [
        {
            type:'list',
            name: 'option',
            message: 'What would you like to do?',
            choices: [
                {
                    value : 1,
                    name: '1- Create task'
                },
                {
                    value: 2,
                    name: '2- Get task'
                },
                {
                    value: 3,
                    name: '3- Exit'
                }
            ]
        }
    ];

    const {option} = await inquirer.prompt(menu);

    return option;
}

const inquirerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message: message
        }
    ];

    const {description} = await inquirer.prompt(question);
    return description; 
}


module.exports = {
    inquirerMenu,
    inquirerInput
}
