//ADD YOUR PASSWORD - LINE 36
// require mysql
const mysql = require("mysql");
//require console table
const consoleTable = require('console.table');
//require inquirer
const inquirer = require ('inquirer'); 
//require asciiart-logo
const logo = require('asciiart-logo');


////////////////////////////// LOGO DISPLAY //////////////////////////////////////////////////
console.log(
    logo({
        name: 'Employee Manager',
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
////////////////////////////// CREATE CONNECTION //////////////////////////////////////////////////
const connection = mysql.createConnection({
    //host
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    /////////////////////////////////// ADD YOUR PASSWORD /////////////////////////////////////////
    password: "Dlareme44",
    database: "company_employees_db"
  });
  ////////////////////////////// CONNECT //////////////////////////////////////////////////
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
////////////////////////////// INITIAL START FUNCTION //////////////////////////////////////////////////
  function start() {
      inquirer.prompt ([
          {
             type:"list",
             message: "What would you like to do?",
             name: "initialPrompt",
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
          switch (response.initialPrompt) {
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
////////////////////////////// ADD DEPARTMENTS //////////////////////////////////////////////////
function addDepartments() {
inquirer.prompt([
    {
        type:"input",
        message: "What department would you like to add?",
        name: "deptName",
    }
]).then(function(response){
    // console.log(response);
    connection.query("INSERT INTO department SET ?",
    {department_name: response.deptName}, function(error){
        if (error) throw error;
       console.log("================================================");
       console.log("You're new department has been added successfully!");
       console.log("================================================");
        start();
    })
})
}
////////////////////////////// ADD ROLES //////////////////////////////////////////////////
function addRoles() {
    let department= []; 
    connection.query("SELECT * FROM department", function(error, response) {
        if(error) throw error;
        for (let i=0; i <response.length; i++) {
            department.push({name: response[i].department_name, value: response[i].id});
        }

inquirer.prompt ([
    {
    type: "input",
    message: "What is their role title?",
    name: "roleTitle",
    },
    {
    type: "input",
    message: "What is their salary?",
    name: "salary",
    },
    {
    type: "list",
    message: "What is their department id number?",
    name: "dept",
    choices: department,
    },    
    ]).then(function(response){
         console.log(response);
        connection.query("INSERT INTO role SET ?",
        {
            role_title: response.roleTitle,
            salary: response.salary,
            department_id: response.dept,
        },
        function(error){
            if (error) throw error;
            start();
        })
    })
});
}
////////////////////////////// ADD EMPLOYEES //////////////////////////////////////////////////
function addEmployees() {
inquirer.prompt ([
    {
        type: "input",
        message: "What is their first name?",
        name: "firstName",
    },
    {
        type: "input",
        message: "What is their last name?",
        name: "lastName",
    },
    {
        type: "input",
        message: "What is their role id number?",
        name: "roleIdNum",
    },
    {
        type: "input",
        message: "If applicable, what is their manager's id number?",
        name: "managerIdNum",
        default: 0,
    },

]).then (function(response){
    connection.query("INSERT INTO employee SET ?",
    {first_name: response.firstName,
    last_name: response.lastName,
    role_id: response.roleIdNum,
    manager_id: response.managerIdNum,
    }, function(error){
        if (error) throw error;
        console.log("================================================");
        console.log("You're new employee has been added successfully!");
        console.log("================================================");
        start();
    })
})
}
////////////////////////////// VIEW DEPARTMENTS //////////////////////////////////////////////////
function viewDepartments() {
    connection.query("SELECT * FROM department", function(error, response){
        if (error) throw error;
        console.table(response);
        start();
        
    })
}
////////////////////////////// VIEW ROLES //////////////////////////////////////////////////
function viewRoles() {
    connection.query("SELECT role.*, department.department_name FROM role LEFT JOIN department ON department.id = role.department_id", function(error, response){
        if (error) throw error;
        console.table(response);
        start();
  });

}
////////////////////////////// VIEW EMPLOYEES //////////////////////////////////////////////////
function viewEmployees() {
    connection.query("SELECT employee.role_id, employee.first_name, employee.last_name, manager_id FROM employee", function(error, response){
        if (error) throw error;
        console.table(response);
        start();
  });

}
////////////////////////////// UPDATE EMPLOYEES //////////////////////////////////////////////////
function updateEmployeeRoles() {
connection.query("SELECT first_name, last_name, id FROM employee",
function(error,response){
    if (error) throw error;
    let employee = response.map(employee =>({
        name: employee.first_name + " " + employee.last_name, value: employee.id}))
    
    inquirer.prompt ([
        {
        type: "list",
        message: "Which employee's role would you like to update?",
        name: "employeeName",
        choices: employee,
        },
        {
        type: "input",
        message: "What is their new role?",
        name: "newRole",
        },
        // {
        //     type: "input",
        //     message: "What is their new salary?",
        //     name: "newSalary",
        //     },    
        ]).then (function(response){
            connection.query("UPDATE role SET ? WHERE ?",
            [{
                role_title: response.newRole
            },
            {
                id: response.employeeName
            },
            ],
            function(error){
                if (error) throw error;
                console.log("================================================");
                console.log("You're employee has been updated successfully!");
                console.log("================================================");
                start();
            })
        })
    
})
}
