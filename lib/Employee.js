//consturctor and class that will accept arguments
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //methods which returns name, id, and email
    getName() {
      return this.name;
    }

    getId(){
        return this.id;

    }

    getEmail(){
        return this.email;

    }

    getRole(){
        return 'Employee';
    }

}
// used module.exports to store class
module.exports = Employee


