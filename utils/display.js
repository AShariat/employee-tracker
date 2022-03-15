const cTable = require('console.table');

function displayAnswer(answer) {
  const respond = answer.selections;
  if (respond === "View All Departments") {
    console.log("View All Departments");
  } else if (respond === "View All Roles") {
    console.log("View All Roles");
  } else if (respond === "View All Employees") {
    console.log("View All Employees");
  } else if (respond === "Add a Department") {
    console.log("Add a Department");
  } else if (respond === "Add a Role") {
    console.log("Add a Role");
  } else if (respond === "Add an Employee") {
    console.log("Add an Employee");
  } else if (respond === "Update an Employee Role") {
    console.log("Update an Employee Role");
  }
  // console.table([
  //   {
  //     answer: respond
  //   }
  // ]);
};

module.exports = displayAnswer;