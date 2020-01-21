const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.role = "Engineer";
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    };
    getRole() {
        return "Engineer";
    };
}

module.exports = { Employee }