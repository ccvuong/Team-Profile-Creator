const Employee = require('./employee');

// intern constructor that extends from employee constructor
class Intern extends Employee {
    constructor( name, id, email, school ) {

        super( name, id, email );
        
        this.school = school;

        this.role = "Intern";
    }

    getSchool() {
        return this.school;
      }

    getRole() {
        return this.role;
    }

}

module.exports = Intern;