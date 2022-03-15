// Dependencies.
const inquirer = require('inquirer');
const displayAnswer = require('./utils/display.js');

const display = require('./utils/display.js')

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selections',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
    }
  ])
  .then(respond => {
    return respond;
  });
};

function init() {
  promptQuestions()
  .then (answer => {
    return displayAnswer(answer);
  })
  .catch(err => {
    console.log(err);
  });
};

init();