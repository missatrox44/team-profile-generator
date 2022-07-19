//engineer
//intern
//mananger

//inquirer
//fs
//path - tells where to write those files

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const path = require('path'); 
const fs = require('fs');

let responses = [];

const EmployeeQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
]