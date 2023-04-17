// node modules
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./genereateHTML');

// team info 
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

// team array
const employee = [];

// prompt
const startQuestions = [
    {
        type: 'list',
        name: 'role',
        message: 'Select the type of role for the employee.',
        choices: ['manager', 'engineer', 'intern']
    }
];

// add manager questions
const newManager = [
    {
        type: 'input',
        name: 'name',
        message: "Input the name of the manager.",

    },

    {
        type: 'number',
        name: 'id',
        message: "Input the manager's ID number.",

    },

    {
        type: 'input',
        name: 'email',
        message: "Input the manager's email address.",

    },

    {
        type: 'number',
        name: 'office',
        message: "Input the manager's office number."
    }
];

// add engineer questions
const newEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "Input the engineer's full name.",
    },

    {
        type: 'number',
        name: 'id',
        message: "Input the engineer's ID number.",
    },

    {
        type: 'input',
        name: 'email',
        message: "Input the engineer's email address.",
    },

    {
        type: 'input',
        name: 'github',
        message: "Input the engineer's GitHub username."
    }

];

// add intern questions
const newIntern = [
    {
        type: 'input',
        name: 'name',
        message: "Input the intern's full name.",
    },

    {
        type: 'number',
        name: 'id',
        message: "Input the intern's ID number.",
    },

    {
        type: 'input',
        name: 'email',
        message: "Input the intern's email address.",
    },

    {
        type: 'input',
        name: 'school',
        message: "Input the intern's school of attendance."
    }

];

// function to start the app
function init(){
    inquirer.createPromptModule(startQuestions).then(answers => {

        // selected manager role
        if(answers.role === 'manager'){
            inquirer.prompt(newManager).then(answers => {
                const manager = newManager(answers.name, answers.id, answers.email, answers.office);
                answersArr.push(manager);
                init();
            })
        }

        // selected engineer role
        if(answers.role === 'engineer'){
            inquirer.prompt(newEngineer).then(answers => {
                const engineer = newEngineer(answers.name, answers.id, answers.email, answers.github);
                answersArr.push(engineer);
                init();
            })
        }

        // selcted intern role
        if(answers.role === 'intern'){
            inquirer.prompt(newIntern).then(answers => {
                const intern = newIntern(answers.name, answers.id, answers.email, answers.school);
                answersArr.push(intern);
                init();
            })
        }
    })
};

init();