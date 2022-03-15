const mysql = require('mysql2');

// Connect to database.
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Amir1987!',
    database: 'mymart'
  },
  console.log("Connected to the mymart database!")
);

module.exports = db;