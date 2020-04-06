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

  // Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles
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
          switch (response.start) {
        //switch/break cases
        //Add departments
        case "Add departments":
        break;
        //Add roles
        case "Add roles":
        break;
        //Add employees
        case "Add employees":
        break;
        //View departments
        case "View departments":
        break;
        //View roles
        case "View roles":
        break;
        //View employees
        case "View employees":
        break;
        //Update employee roles
        case "Update employee roles":
        break;
        //Exit Application
        case "Exit Application":
            connection.end();
        break;
          }
      })
  }


