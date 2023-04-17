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

