const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection.js');

function displayAnswer(answer) {
  const respond = answer.selections;
  if (respond === "View All Departments") {
    console.log("View All Departments");
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
  } else if (respond === "View All Roles") {
    console.log("View All Roles");
    const sql = `SELECT roles.id, roles.role_title, roles.salary, departments.department_name FROM roles INNER JOIN departments ON roles.department_id = departments.id;`;
    db.query(sql, (err,rows) => {
      if (err) {
        if (err) throw err;
      }
      // console.log(rows);
      let values = [];
      for (let i = 0; i < rows.length; i++) {
        values[i] = [rows[i].id, rows[i].role_title, rows[i].salary, rows[i].department_name];
      }
      console.table(['Role ID', 'Role Name', 'Salary', 'Department Name'], values);
    });
  } else if (respond === "View All Employees") {
    console.log("View All Employees");
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id, roles.role_title, roles.salary, roles.department_id FROM employees LEFT JOIN roles ON role_id = roles.id;`;
    db.query(sql, (err,rows) => {
      if (err) {
        if (err) throw err;
      }
      // console.log(rows);
      let values = [];
      for (let i = 0; i < rows.length; i++) {
        values[i] = [rows[i].id, rows[i].first_name, rows[i].last_name,  rows[i].manager_id, rows[i].role_title, rows[i].salary, rows[i].department_id];
      }
      console.table(['Employee ID', 'First Name', 'Last Name', 'Manager ID', 'Role', 'Salary', 'Department ID'], values);
    });
  } else if (respond === "Add a Department") {
    console.log("Add a Department");
  } else if (respond === "Add a Role") {
    console.log("Add a Role");
  } else if (respond === "Add an Employee") {
    console.log("Add an Employee");
  } else if (respond === "Update an Employee Role") {
    console.log("Update an Employee Role");
  } else {
    process.exit();
  }
};

module.exports = displayAnswer;