const Employee = require('./Employee');

//created Manager class that inherits methods from Employee by using extends
//used super() method in constructor method to get access to Employee properties and methods

class Manager extends Employee{

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager