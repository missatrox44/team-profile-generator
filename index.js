const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./generateHTML');

const inquirer = require('inquirer');
const path = require('path'); 
const fs = require('fs');


let responses = [];

//engineer question array
const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
  },

]

//intern question array
const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school did you attend?'
  },

]

//manager question array
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'officeNum',
    message: 'What is your office number?'
  },

]

//use fs to make index.html
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(engineerQuestions).then((inquirerResponses)=>{
      writeToFile("index.html", generateHTML({...inquirerResponses}))
  })
}

init();