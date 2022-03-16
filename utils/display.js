const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection.js');

function displayAnswer(answer) {
  const respond = answer.selections;
  if (respond === "View All Departments") {
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
  } else if (respond === "View All Employees") {
    const sql = `SELECT employees.created_at, employees.id, employees.first_name, employees.last_name, employees.manager_id, roles.role_title, roles.salary, departments.department_name FROM employees LEFT JOIN roles ON role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;`;
    db.query(sql, (err,rows) => {
      if (err) {
        if (err) throw err;
      }
      let values = [];
      for (let i = 0; i < rows.length; i++) {
        values[i] = [rows[i].created_at, rows[i].id, rows[i].first_name, rows[i].last_name,  rows[i].role_title, rows[i].department_name, rows[i].salary, rows[i].manager_id];
      }
      console.table(['Hire Date', 'Employee ID', 'First Name', 'Last Name', 'Job Title', 'Department', 'Salary', 'Manager ID'], values);
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