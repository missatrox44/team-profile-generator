const fs = require('fs');
const path = require('path');

const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

//generate HTML using answers from prompts
const team = (teamInfo) => {
  console.log('calling generate HTML');
  console.log(teamInfo);
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <title>Team Profile Generator</title>
  </head>
  
  <body>

    <header>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
          <p class="lead">Meet your amazing team!</p>
        </div>
      </div>
    </header>

    <main class="d-flex justify-content-around">
      <div class="row">
        <div class="team col-12">
        <div class="card" style="width: 18rem;">
          <div class="card-header">
          ${teamInfo[0].name} <br>
          Manager
         </div>
         <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: <span>${teamInfo[0].id}</span></li>
          <li class="list-group-item">Email: <span>${teamInfo[0].email}</span></li>
          <li class="list-group-item">Office Number: <span>${teamInfo[0].officeNum}</span></li>
         </ul>
        </div>
        
        ${engineers(teamInfo)}
        ${interns(teamInfo)}
        
      </div>
        

    </main>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
  
  </body>
</html>
  `
}

//function to create manager problems
const engineers = (teamInfo) => {
  let engineerCards = ''
  for(i = 0; i< teamInfo.length; i++){
    console.log(teamInfo[i].getRole())
    if(teamInfo[i].getRole() === 'Engineer'){
      engineerCards += `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${teamInfo[i].name} <br>
        Engineer
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: <span>${teamInfo[i].id}</span></li>
        <li class="list-group-item">Email: <span>${teamInfo[i].email}</span></li>
        <li class="list-group-item">Office GitHub Username: <span>${teamInfo[i].github}</span></li>
      </ul>
    </div>
    </div>`
    }
  }
  return engineerCards;
}

//function to create intern cards
const interns = (teamInfo) => {
  let internCards = ''
  for(i = 0; i< teamInfo.length; i++){
    console.log(teamInfo[i].getRole())
    if(teamInfo[i].getRole() === 'Intern'){
      internCards += `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${teamInfo[i].name} <br>
        Intern
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: <span>${teamInfo[i].id}</span></li>
        <li class="list-group-item">Email: <span>${teamInfo[i].email}</span></li>
        <li class="list-group-item">School: <span>${teamInfo[i].school}</span></li>
      </ul>
    </div>
    </div>`
    }
  }
  return internCards;
}


module.exports = team;








// //take in employee, determine role, create html
// const generateCard = (employee) => {
//   switch (employee.getRole) {
//     case manager: 'Manager';
//     break;
    
//   }


//   const template = ` <div class="card" style="width: 18rem;">
//   <div class="card-header">
//     ${name} <br>
//     ${employee.getRole()}
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: <span>${id}</span></li>
//     <li class="list-group-item">Email: <span>${email}</span></li>
//     <li class="list-group-item">Office Number: <span>${officeNum}</span></li>
//   </ul>
// </div>
// </div>`


