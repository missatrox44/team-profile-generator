const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./lib/generateHTML');

const inquirer = require('inquirer');
// const path = require('path'); 
const fs = require('fs');


let teamInfo = [];

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


//next Person question array
const whoNext = [
  {
    type: 'list',
    name: 'choice',
    message: 'Who do you want to add next?',
    choices: ['Engineer', 'Intern', 'Finished'],
  },
  
]

//function to start program -> creates manager profile
const init = () => {
  inquirer.prompt(managerQuestions)
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
    teamInfo.push(manager);
    console.log(teamInfo);
    nextPerson();
  })
}

//function to give user choice of which profile to create next
const nextPerson = () => {
  inquirer.prompt(whoNext)
  .then(answers => {
    //choice = engineer, run engineer function
    if(answers.choice === 'Engineer'){
      makeEngineer();
    } else if (answers.choice === 'Intern') {
      makeIntern();
    } else {
      makeHTML(teamInfo);
    }
  })
}

//function to prompt engineer questions
const makeEngineer = () => {
  inquirer.prompt(engineerQuestions)
  .then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamInfo.push(engineer);
    console.log(teamInfo);
    nextPerson();
  })
}

//function to prompt intern questions
const makeIntern= () => {
  inquirer.prompt(internQuestions)
  .then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamInfo.push(intern);
    console.log(teamInfo);
    nextPerson();
  })
}

//function to write generated HTML file with team info
const makeHTML = () => {
  fs.writeFileSync('index.html', generateHTML(teamInfo)), (err) =>
  err ? console.log(err) : console.log('Successfully generated team profiles')
}


init();