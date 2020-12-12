const Employee = require('./Employee');

//created Intern class that inherits methods from Employee by using extends
//used super() method in constructor method to get access to Employee properties and methods

class Intern extends Employee{

    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getofficeNumber(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern