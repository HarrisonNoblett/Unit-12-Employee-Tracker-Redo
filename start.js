// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var util = require("util");
require("console.table")

//Connecting to the MySQL data-base
var connection = mysql.createConnection({
  host: "localhost",

  // My local port
  port: 3306,

  // My username
  user: "root",

  // My password
  password: "Panda736!",

  //My DataBase
  database: "Employee_db"
});

// If connected shoot the initial prompt questions
connection.connect(function(err) {
  if (err) throw err;
  initialPrompts()
});

//Prompts the choices the user can choose from
function initialPrompts() {
    inquirer.prompt([
        {
            type: "rawlist",
            message: "Please choose what you like to do",
            choices: ["View All Employees", "View All Employees by Department", "View All Employees by Manager", "Add Employee", "Finished"],
            name: "Choices"
        }
    ]).then(function(answer) {
        switch (answer.choices) {
            case "View All Employees":
                viewEmployee();
                break;
 
            case "View All Employes by Department":
                viewbyDepartment();
                break;

            case "View All Employees by Manager":
                viewbyManager();
                break;

            case "Add Employee":
                addEmployee();
                break;
            default:
                process.exit();
        }
    })
}

//Function to see all of the eployees
function viewEmployee() {
    var query = "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee INNER JOIN department ON employee.id=department.id;"
    connection.query(query, (err, data) => {
        console.table(data)
        initialPrompts();
    });
};

//Function to view employees by department
function viewbyDepartment() {
    inquierer
        .prompt([{
            type: "rawlist",
            message: "Select the department that you would like to view",
            choices: ["HR", "IT", "Sales", "Engineering"]
        }]).then(function(answer) {
            console.log(answer)
        })
}

//Function to view employees by manager
function viewbyManager() {
    inquirer
        .prompt([{
            type: "rawlist",
            message: "Select the manager that you would like to view",
            choices: ["Coding", "Sales", "CEO"]
        }]).then(function(answer) {
            console.log(answer)

        })
}

//Function to add a new Employee
function addEmployee() {
    inquirer
    .prompt([{

            type: "input",
            name: "first_name",
            message: "Please provide the employee's first name",
        },
        {
            type: "input",
            name: "last_name",
            message: "Please provide the employee's last name",
        },
        {
            type: "input",
            name: "role_id",
            message: "Please enter a role ID",
        },
        {
            type: "input",
            name: "manager_id",
            message: "Please enter a manager ID",
        }
    ])
    .then(function(answer) {
        console.log(answer)
        connection.query("INSERT INTO employee SET ?", {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id,
        }, function(err) {
            if (err) throw (err)
            console.log("Employee added!")
            console.log(err)
            runEmployeePrompt();
        })
    })
}
