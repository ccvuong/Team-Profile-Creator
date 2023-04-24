// node modules
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');

// team info 
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// team array
const employee = [];

// prompt
const startQuestions = [
    {
        type: 'list',
        name: 'role',
        message: 'Select the type of role for the employee.',
        choices: ['Manager', 'Engineer', 'Intern', 'Finished']
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
function init() {
    inquirer.prompt(startQuestions).then(answers => {

        // selected manager role
        if (answers.role === 'Manager') {
            inquirer.prompt(newManager).then(answers => {

                const manager = new Manager(
                    answers.name, 
                    answers.id, 
                    answers.email, 
                    answers.office
                    );

                employee.push(manager);
                init();
            })
        }

        // selected engineer role
        if (answers.role === 'Engineer') {
            inquirer.prompt(newEngineer).then(answers => {

                const engineer = new Engineer(
                    answers.name, 
                    answers.id, 
                    answers.email, 
                    answers.github
                    );

                employee.push(engineer);
                init();
            })
        }

        // selcted intern role
        if (answers.role === 'Intern') {
            inquirer.prompt(newIntern).then(answers => {

                const intern = new Intern(
                    answers.name, 
                    answers.id, 
                    answers.email, 
                    answers.school
                    );

                employee.push(intern);
                init();
            })
        }
        
        if (answers.role === 'Finished') {
            console.log(employee);
            makeTeam();
            return;
          }
        
    })
};

init();

// generated HTML page
function makeTeam() {
    fs.writeFileSync('./dist/createdTeam.html', generateHTML(employee), "utf-8");
    console.log('Team Generated')
  };