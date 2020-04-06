// require mysql
const mySql = require("mysql");
//require console table
const consoleTable = require('console.table');
//require inquirer
const inquirer = require ('inquirer'); 

const connection = mysql.createConnection({
    //host
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "Dlareme44",
    database: "company_employees_db"
  });
  
  connection.connect(function(error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
  });

// Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles