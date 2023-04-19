
const employee = require('./employee');

// engineer constructor that extends from employee constructor
class engineer extends employee {
    constructor({ name, email, id, github }) {

        super({ name, email, id })

        this.github = github;

        this.role = "Engineer";
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }

}

module.exports = engineer;