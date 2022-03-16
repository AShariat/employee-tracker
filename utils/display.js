const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection.js');

function displayDepartments(answer) {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err,rows) => {
    if (err) {
      if (err) throw err;
    }
    let values = [];
    for (let i = 0; i < rows.length; i++) {
      values[i] = [rows[i].id, rows[i].department_name];
    }
    console.table(['Department ID', 'Department Name'], values);
  });
};

function displayRoles(answer) {
  const sql = `SELECT roles.id, roles.role_title, roles.salary, departments.department_name FROM roles INNER JOIN departments ON roles.department_id = departments.id;`;
  db.query(sql, (err,rows) => {
    if (err) {
      if (err) throw err;
    }
    let values = [];
    for (let i = 0; i < rows.length; i++) {
      values[i] = [rows[i].id, rows[i].role_title, rows[i].department_name, rows[i].salary];
    }
    console.table(['Role ID', 'Job Title', 'Department Name', 'Salary'], values);
  });
};

function displayEmployees(answer) {
  const sql = `SELECT employees.created_at, employees.id, employees.first_name, employees.last_name, employees.manager_id, roles.role_title, roles.salary, departments.department_name FROM employees LEFT JOIN roles ON role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;`;
  db.query(sql, (err,rows) => {
    if (err) {
      if (err) throw err;
    }
    let values = [];
    for (let i = 0; i < rows.length; i++) {
      values[i] = [rows[i].id, rows[i].first_name, rows[i].last_name,  rows[i].role_title, rows[i].department_name, rows[i].salary, rows[i].manager_id, rows[i].created_at];
    }
    console.table(['Employee ID', 'First Name', 'Last Name', 'Job Title', 'Department', 'Salary', 'Manager ID', 'Hire Date'], values);
  });
};

function newDepartment(name) {
  const sql = `INSERT INTO departments (department_name) VALUES (?);`;
  const params = [name];
  db.query(sql, params, (err, result) => {
    if (err) {
      if (err) throw err;
    }
    console.log(`"Added ${name} to the database!"`);
  })
};

function addDepartment() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'newDepartmentName',
      message: 'What is the Name of the department?',
    }
  ])
  .then(respond => {
    return newDepartment(respond.newDepartmentName);
  });
};

function newRole(name, salary, department) {
  const sql = `INSERT INTO roles (role_title, salary, department_id) VALUES (?, ?, ?);`;
  const params = [name, salary, department];
  db.query(sql, params, (err, result) => {
    if (err) {
      if (err) throw err;
    }
    console.log(`"Added ${name} to the database!"`);
  })
};

function addRole() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'newRoleName',
      message: 'What is the name of the role?',
    },
    {
      type: 'input',
      name: 'newRoleSalary',
      message: 'What is the salary of the role?',
    },
    {
      type: 'input',
      name: 'newRoleDepartment',
      message: 'Which department does the role belong to?',
    }
  ])
  .then(respond => {
    return newRole(respond.newRoleName, respond.newRoleSalary,respond.newRoleDepartment);
  });
};

module.exports = {
  displayDepartments,
  displayRoles,
  displayEmployees,
  addDepartment,
  addRole
};