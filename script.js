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

//===========================================
//Variables to store information from function
//===========================================
let teamMembers = [];
let teamName;

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
        name: "managerid",
    },
    {
        type: "input",
        message: "What is the Manager's Email?",
        name: "manageremail",
    },
    {
        type: "input",
        message: "What is the Manager's Office Number?",
        name: "officenumber",
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
        name: "employeename",
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "employeeid",
    },
    {
        type: "input",
        message: "What is the employee's Email?",
        name: "employeeemail",
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
    },
    {
        type: "confirm",
        message: "Would you like to add another employee to the team?",
        name: "additonalmember"
    },
]


//================================
//functions to help the async init
//===============================
function managerData() {
    inquirer.prompt(managerQuestions)
        .then(managerResponse => {
            teamName = managerResponse.teamname;
            const managerName = managerResponse.managername;
            const managerId = managerResponse.managerid;
            const managerEmail = managerResponse.manageremail;
            const officeNumber = managerResponse.officeNumber;

            //create a new manager and add them to teamMember array
            const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
            teamMembers.push(manager);
            teamData();
        })
}

function teamData() {
    inquirer.prompt(teamQuestions)
        .then(userResponse => {
            const role = userResponse.role;
            const employeeName = userResponse.employeename;
            const employeeId = userResponse.employeeid;
            const employeeEmail = userResponse.employeeemail;
            const github = userResponse.github;
            const school = userResponse.school;
            const additonalMember = userResponse.additonalmember;

            //create either new engineer or intern
            if (role === "Engineer") {
                const engineer = new Engineer(employeeName, employeeId, employeeEmail, github);
                teamMembers.push(engineer);
            } else if (role === "Intern") {
                const intern = new Intern(employeeName, employeeId, employeeEmail, school);
                teamMembers.push(intern);
            }

            //create a statment that lets the function run for as many members the team needs
            if (additonalMember === true) {
                teamData();
            } else {
                //render the team

                // console.log(teamName);
                // console.log(teamMembers);
            }
        })
}

console.log(teamMembers);


managerData();
//================================
//Init function to run the program
//================================
// async function init() {
//     console.log("============================================Starting Team Generator ==========================================")
//     let teamMembers = [];

//     try {
//         //prompt user with Manager questions
//         const managerResponse = await inquirer.prompt(managerQuestions);
//         const teamName = managerResponse.teamname;
//         const managerName = managerResponse.managername;
//         const managerId = managerResponse.managerid;
//         const managerEmail = managerResponse.manageremail;
//         const officeNumber = managerResponse.officeNumber;

//         //create a new manager and add them to teamMember array
//         const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
//         teamMembers.push(manager);

//         //prompt user with team building questions
//         const userResponse = await inquirer.prompt(teamQuestions);
//         const role = userResponse.role;
//         const employeeName = userResponse.employeename;
//         const employeeId = userResponse.employeeid;
//         const employeeEmail = userResponse.employeeemail;
//         const github = userResponse.github;
//         const school = userResponse.school;
//         const additonalMember = userResponse.additonalmember;

//         //create either new engineer or intern
//         if (role === "Engineer") {
//             const engineer = new Engineer(employeeName, employeeId, employeeEmail, github);
//             teamMembers.push(engineer);
//         } else if (role === "Intern") {
//             const intern = new Intern(employeeName, employeeId, employeeEmail, school);
//             teamMembers.push(intern);
//         }

//         //prompt user to add another member
//         if (additonalMember === true) {

//         }



//         //test to see if these objects get created
//         console.log(teamName);
//         console.log(teamMembers);



//     } catch (err) {
//         console.log(err);
//     }
// }

// init();