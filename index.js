// require mysql
const mysql = require("mysql");
//require console table
const consoleTable = require('console.table');
//require inquirer
const inquirer = require ('inquirer'); 
//require asciiart-logo
const logo = require('asciiart-logo');

console.log(
    logo({
        name: 'Employee'+
        'Manager',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'grey',
        logoColor: 'bold-white',
        textColor: 'white',
    })
    .emptyLine()
    .emptyLine()
    .render()
);

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
            addDepartments();
        break;
        //Add roles
        case "Add roles":
            addRoles();
        break;
        //Add employees
        case "Add employees":
            addEmployees();
        break;
        //View departments
        case "View departments":
            viewDepartments();
        break;
        //View roles
        case "View roles":
            viewRoles();
        break;
        //View employees
        case "View employees":
            viewEmployees();
        break;
        //Update employee roles
        case "Update employee roles":
            updateEmployeeRoles();
        break;
        //Exit Application
        case "Exit Application":
            connection.end();
        break;
          }
      })
  }

function addDepartments() {

  }

function addRoles() {

}

function addEmployees() {

}

function viewDepartments() {

}

function viewRoles() {

}

function viewEmployees() {

}

function updateEmployeeRoles() {

}

