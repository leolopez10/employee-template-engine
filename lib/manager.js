const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager"
        this.officeNumber = officeNumber;

    }
    getRole() {
        return;
    }
}

module.exports = { Manager }