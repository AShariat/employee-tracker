const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection.js');

// function displayAnswer(answer) {
//   if (answer.selections === "View All Departments") {
//     const sql = `SELECT * FROM departments`;
//     db.query(sql, (err,rows) => {
//       if (err) {
//         if (err) throw err;
//       }
//       let values = [];
//       for (let i = 0; i < rows.length; i++) {
//         values[i] = [rows[i].id, rows[i].department_name];
//       }
//       console.table(['Department ID', 'Department Name'], values);
//     });
//   } else if (answer.selections === "View All Roles") {
//     const sql = `SELECT roles.id, roles.role_title, roles.salary, departments.department_name FROM roles INNER JOIN departments ON roles.department_id = departments.id;`;
//     db.query(sql, (err,rows) => {
//       if (err) {
//         if (err) throw err;
//       }
//       let values = [];
//       for (let i = 0; i < rows.length; i++) {
//         values[i] = [rows[i].id, rows[i].role_title, rows[i].department_name, rows[i].salary];
//       }
//       console.table(['Role ID', 'Job Title', 'Department Name', 'Salary'], values);
//     });
//   } else if (answer.selections === "View All Employees") {
//     const sql = `SELECT employees.created_at, employees.id, employees.first_name, employees.last_name, employees.manager_id, roles.role_title, roles.salary, departments.department_name FROM employees LEFT JOIN roles ON role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;`;
//     db.query(sql, (err,rows) => {
//       if (err) {
//         if (err) throw err;
//       }
//       let values = [];
//       for (let i = 0; i < rows.length; i++) {
//         values[i] = [rows[i].id, rows[i].first_name, rows[i].last_name,  rows[i].role_title, rows[i].department_name, rows[i].salary, rows[i].manager_id, rows[i].created_at];
//       }
//       console.table(['Employee ID', 'First Name', 'Last Name', 'Job Title', 'Department', 'Salary', 'Manager ID', 'Hire Date'], values);
//     });
//   } else if (answer.selections === "Add a Department") {
//     const newDepartment = function() {
//       return inquirer.prompt([
//         {
//           type: 'input',
//           name: 'newDepartmentName',
//           message: 'What is the Name of the department?',
//         }
//       ])
//       .then(respond => {
//         return respond;
//       });
//     };
//     console.log(newDepartment());
    // const sql = `SELECT employees.created_at, employees.id, employees.first_name, employees.last_name, employees.manager_id, roles.role_title, roles.salary, departments.department_name FROM employees LEFT JOIN roles ON role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;`;
    // db.query(sql, (err,rows) => {
    //   if (err) {
    //     if (err) throw err;
    //   }
      // let values = [];
      // for (let i = 0; i < rows.length; i++) {
      //   values[i] = [rows[i].created_at, rows[i].id, rows[i].first_name, rows[i].last_name,  rows[i].role_title, rows[i].department_name, rows[i].salary, rows[i].manager_id];
      // }
      // console.table(['Hire Date', 'Employee ID', 'First Name', 'Last Name', 'Job Title', 'Department', 'Salary', 'Manager ID'], values);
    // });
//   } else if (answer.selections === "Add a Role") {
//     console.log("Add a Role");
//   } else if (answer.selections === "Add an Employee") {
//     console.log("Add an Employee");
//   } else if (answer.selections === "Update an Employee Role") {
//     console.log("Update an Employee Role");
//   } else {
//     process.exit();
//   }
// };

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

module.exports = {
  displayDepartments,
  displayRoles,
  displayEmployees,
  addDepartment
};