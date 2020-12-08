// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./lib/Employee');

//created Engineer class that inherits methods from Employee by using extends
//used super() method in constructor method to get access to Employee properties and methods

class Engineer extends Employee{

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getofficeNumber(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer
