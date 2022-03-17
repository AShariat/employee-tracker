const inquirer = require('inquirer');
const { displayDepartments, displayRoles, displayEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, updateEmployeeManager } = require('./utils/display.js');

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selections',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', "Update an Employee's Role", "Update an Employee's Manager", 'EXIT!'],
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
      return displayDepartments();
    } else if (answer.selections === "View All Roles") {
      return displayRoles();
    } else if (answer.selections === "View All Employees") {
      return displayEmployees();
    } else if (answer.selections === "Add a Department") {
      return addDepartment();
    } else if (answer.selections === "Add a Role") {
      return addRole();
    } else if (answer.selections === "Add an Employee") {
      return addEmployee();
    } else if (answer.selections === "Update an Employee's Role") {
      return updateEmployeeRole();
    } else if (answer.selections === "Update an Employee's Manager") {
      return updateEmployeeManager();
    } else {
      process.exit();
    }  
  })
  .catch(err => {
    console.log(err);
  });
};

start();