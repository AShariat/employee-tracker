const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection.js');

function displayDepartments() {
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
    process.exit();
  });
};

function displayRoles() {
  const sql = `SELECT roles.id, roles.role_title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id;`;
  db.query(sql, (err,rows) => {
    if (err) {
      if (err) throw err;
    }
    let values = [];
    for (let i = 0; i < rows.length; i++) {
      values[i] = [rows[i].id, rows[i].role_title, rows[i].department_name, rows[i].salary];
    }
    console.table(['Role ID', 'Job Title', 'Department Name', 'Salary'], values);
    process.exit();
  });
};

function displayEmployees() {
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
    process.exit();
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
    return displayDepartments();
  });
};

function addDepartment() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'newDepartmentName',
      message: 'What is name of the new department?(Required)',
      validate: newDepartmentNameInput => {
        if (newDepartmentNameInput) {
          return true;
        } else {
          console.log("Please enter name of the new department!");
          return false;
        }
      }
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
    return displayRoles();
  });
};

function addRole() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'newRoleName',
      message: 'What is name of the new role?(Required)',
      validate: newRoleNameInput => {
        if (newRoleNameInput) {
          return true;
        } else {
          console.log("Please enter name of the new role!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'newRoleSalary',
      message: 'What is salary of the new role?(Required)',
      validate: newRoleSalaryInput => {
        if (newRoleSalaryInput) {
          return true;
        } else {
          console.log("Please enter salary of the new role!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'newRoleDepartment',
      message: 'Which department does the role belong to?(Required)',
      validate: newRoleDepartmentInput => {
        if (newRoleDepartmentInput) {
          return true;
        } else {
          console.log("Please enter department of the new role!");
          return false;
        }
      }
    }
  ])
  .then(respond => {
    return newRole(respond.newRoleName, respond.newRoleSalary, respond.newRoleDepartment);
  });
};

function newEmployee(firstName, lastName, role, manager) {
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`;
  const params = [firstName, lastName, role, manager];
  db.query(sql, params, (err, result) => {
    if (err) {
      if (err) throw err;
    }
    console.log(`"Added ${firstName} ${lastName} to the database!"`);
    return displayEmployees();
  });
};

function addEmployee() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'newEmployeeFirstName',
      message: "What is new employee's first name?(Required)",
      validate: newEmployeeFirstNameInput => {
        if (newEmployeeFirstNameInput) {
          return true;
        } else {
          console.log("Please enter new employee's first name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'newEmployeeLastName',
      message: "What is new employee's last name?(Required)",
      validate: newEmployeeLastNameInput => {
        if (newEmployeeLastNameInput) {
          return true;
        } else {
          console.log("Please enter new employee's last name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'newEmployeeRole',
      message: "What is new employee's role's id?(Required)",
      validate: newEmployeeRoleInput => {
        if (newEmployeeRoleInput) {
          return true;
        } else {
          console.log("Please enter new employee's role's id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'newEmployeeManager',
      message: "What is new employee's manager's id?(Required)",
      validate: newEmployeeManagerInput => {
        if (newEmployeeManagerInput) {
          return true;
        } else {
          console.log("Please enter new employee's manager's id!");
          return false;
        }
      }
    }
  ])
  .then(respond => {
    return newEmployee(respond.newEmployeeFirstName, respond.newEmployeeLastName, respond.newEmployeeRole, respond.newEmployeeManager);
  });
};

function updateEmployeeRoleRender(id, role) {
  const sql = `UPDATE employees SET role_id = ? WHERE id = ?;`;
  const params = [role, id];
  db.query(sql, params, (err, result) => {
    if (err) {
      if (err) throw err;
    }
    console.log(`"Changed employee ${id} role to ${role} in the database!"`);
    return displayEmployees();
  });
};

function updateEmployeeRole() {
  return inquirer.prompt([
    {
      type:'input',
      name: 'updateEmployeeRoleId',
      message: "What is the employee's ID of the employee that you want to update their role?(Required)",
      validate: updateEmployeeRoleIdInput => {
        if (updateEmployeeRoleIdInput) {
          return true;
        } else {
          console.log("Please enter the employee's ID!");
          return false;
        }
      }
    },
    {
      type:'input',
      name: 'updateEmployeeRoleNewRoleId',
      message: "What is the employee's new role's ID?(Required)",
      validate: updateEmployeeRoleNewRoleIdInput => {
        if (updateEmployeeRoleNewRoleIdInput) {
          return true;
        } else {
          console.log("Please enter the employee's new role's ID!");
          return false;
        }
      }
    }
  ])
  .then(respond => {
    return updateEmployeeRoleRender(respond.updateEmployeeRoleId, respond.updateEmployeeRoleNewRoleId);
  });
};

function updateEmployeeManagerRender(id, manager) {
  const sql = `UPDATE employees SET manager_id = ? WHERE id = ?;`;
  const params = [manager, id];
  db.query(sql, params, (err, result) => {
    if (err) {
      if (err) throw err;
    }
    console.log(`"Changed employee ${id} manager to ${manager} in the database!"`);
    return displayEmployees();
  });
};

function updateEmployeeManager() {
  return inquirer.prompt([
    {
      type:'input',
      name: 'updateEmployeeManagerId',
      message: "What is the employee's ID of the employee that you want to update their manager?(Required)",
      validate: updateEmployeeManagerIdInput => {
        if (updateEmployeeManagerIdInput) {
          return true;
        } else {
          console.log("Please enter the employee's ID!");
          return false;
        }
      }
    },
    {
      type:'input',
      name: 'updateEmployeeManagerNewManagerId',
      message: "What is the employee's new manager's ID?(Required)",
      validate: updateEmployeeManagerNewManagerIdInput => {
        if (updateEmployeeManagerNewManagerIdInput) {
          return true;
        } else {
          console.log("Please enter the employee's new manager's ID!");
          return false;
        }
      }
    }
  ])
  .then(respond => {
    return updateEmployeeManagerRender(respond.updateEmployeeManagerId, respond.updateEmployeeManagerNewManagerId);
  });
};

module.exports = {
  displayDepartments,
  displayRoles,
  displayEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  updateEmployeeManager
};