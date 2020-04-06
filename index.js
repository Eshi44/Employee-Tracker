// require mysql
const mysql = require("mysql");
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
    //call start function
    start();
  });

  function start() {
      inquirer.prompt ([
          {
             type:"list",
             message: "What would you like to do?",
             choices:  [
                 "Add departments",
                 "Add roles",
                 "Add employees",
                 "View departments",
                 "View roles",
                 "View employees",
                 "Update employee roles",
                 "Exit Application",
                ]
          }
      ]).then (function(response){
          //switch/break cases
      })
  }


// Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles