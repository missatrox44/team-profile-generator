const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./lib/generateHTML');

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


//next Person question array
const whoNext = [
  {
    type: 'list',
    name: 'choice',
    message: 'Who do you want to add next?',
    choices: ['Engineer', 'Intern', 'Finished'],
  },
  
]


const init = () => {
  inquirer.prompt(managerQuestions)
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
    responses.push(manager);
    console.log(responses);
    //push to team array (manager parameter)
    //call function to create new team member
    nextPerson();
  })
}

const nextPerson = () => {
  inquirer.prompt(whoNext)
  .then(answers => {
    //choice = engineer, run engineer function
    if(answers.choice === 'Engineer'){
      makeEngineer();
    } else if (answers.choice === 'Intern') {
      makeIntern();
    } else {
      generateHTML(responses);
    }
  })
}

const makeEngineer = () => {
  inquirer.prompt(engineerQuestions)
  .then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    responses.push(engineer);
    console.log(responses);
    //push to team array (engineer parameter)
    //call function to create new team member
    nextPerson();
  })
}

const makeIntern= () => {
  inquirer.prompt(internQuestions)
  .then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    responses.push(intern);
    console.log(responses);
    //push to team array (engineer parameter)
    //call function to create new team member
    nextPerson();
  })
}

// //use fs to make index.html
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// // function to initialize program
// function init() {
//   inquirer.prompt(engineerQuestions).then((inquirerResponses)=>{
//       writeToFile("index.html", generateHTML({...inquirerResponses}))
//   })
// }


init();