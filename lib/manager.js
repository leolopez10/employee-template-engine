const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager"
        this.officeNumber = officeNumber;

    }
    getRole() {
        return "Manager";
    }
}

module.exports = { Manager }