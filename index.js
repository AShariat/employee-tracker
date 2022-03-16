const inquirer = require('inquirer');
const { displayDepartments, displayRoles, displayEmployees, addDepartment, addRole } = require('./utils/display.js');

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selections',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'EXIT!'],
      default:'EXIT!'
    }
  ])
  .then(respond => {
    return respond;
  });
};

function start() {
  promptQuestions()
  .then (answer => {
    if (answer.selections === "View All Departments") {
      return displayDepartments(answer);
    } else if (answer.selections === "View All Roles") {
      return displayRoles(answer);
    } else if (answer.selections === "View All Employees") {
      return displayEmployees(answer);
    } else if (answer.selections === "Add a Department") {
      return addDepartment();
    } else if (answer.selections === "Add a Role") {
      return addRole();
    } else if (answer.selections === "Add an Employee") {
      console.log("Add an Employee");
    } else if (answer.selections === "Update an Employee Role") {
      console.log("Update an Employee Role");
    } else {
      process.exit();
    }  
  })
  .catch(err => {
    console.log(err);
  });
};

start();