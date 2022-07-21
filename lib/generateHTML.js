const fs = require('fs');
const path = require('path');

//create team
//grab inputs from answers array
//use filter and map to go through array and send to correct html template (use getRole())

const team = (members) => {
  console.log('calling generate HTML');
  console.log(members);
}

//take in employee, determine role, create html
const generateCard = (employee) => {
  switch (employee.getRole) {
    case manager: 'Manager';
    break;
    
  }


  const template = ` <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${name} <br>
    ${employee.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: <span>${id}</span></li>
    <li class="list-group-item">Email: <span>${email}</span></li>
    <li class="list-group-item">Office Number: <span>${officeNum}</span></li>
  </ul>
</div>
</div>`
}

module.exports = team;