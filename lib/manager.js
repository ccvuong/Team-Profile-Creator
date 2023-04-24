const Employee = require('./employee');

// manager constructor that extends from employee constructor
class Manager extends Employee {
    constructor({ name, id, email, officeNumber }) {

        super({ name, id, email });
        
        this.officeNumber = officeNumber;

        this.role = "Manager";
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Manager;