//================
//npms
//================
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

//======================
//writing files promises
//======================
const writeFileAsync = util.promisify(fs.writeFileSync);
const readFileAsync = util.promisify(fs.readFileSync);

//============================
//attach classes for employees
//============================
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//=========
//questions
//=========
managerQuestions = [{
        type: "input",
        message: "Let's start a project. What is the team name?",
        name: "teamname",
    },
    {
        type: "input",
        message: "Who is the Manager of this project",
        name: "managername"
    },
    {
        type: "input",
        message: "What is the Manager's ID?",
        name: "managerId",
    },
    {
        type: "input",
        message: "What is the Manager's Email?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the Manager's Office Number?",
        name: "officeNumber",
    }
]

teamQuestions = [{
        type: "list",
        message: "Who would you like to add to the team?",
        choices: ["Engineer", "Intern"],
        name: "role",
    },
    {
        type: "input",
        message: "What is the employee's name?",
        name: "employeeName",
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What is the employee's Email?",
        name: "employeeEmail",
    },
    {
        type: "input",
        message: "What is your engineer's GitHub user-name?",
        when: (userResponse) => userResponse.role === "Engineer",
        name: "github",
    },
    {
        type: "input",
        message: "Which university is your Intern attending?",
        when: (userResponse) => userResponse.role === "Intern",
        name: "school",
    }
]

//================================
//Init function to run the program
//================================