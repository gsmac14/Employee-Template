const Employee = require('./Employee');

//created Engineer class that inherits methods from Employee by using extends
//used super() method in constructor method to get access to Employee properties and methods

class Engineer extends Employee{

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }


    getGithub() {
        return this.github;

    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer
