//================
//npms
//================
const fs = require("fs");
const inquirer = require("inquirer");

//============================
//attach classes for employees
//============================
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//=========
//questions
//=========





function promptUser() {
    inquirer.prompt([{ // Fill html with teamName.
            type: "input",
            message: "What is the name of this team/project?",
            name: "teamTitle"
        },
        { // There is only 1 manager for a team.
            type: "input",
            message: "Who is the manager of this project?",
            name: "managerName"
        },
    ])
}

promptUser();