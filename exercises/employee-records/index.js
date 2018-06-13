var employees = [];

var Employee = function(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full-time";

    }

Employee.prototype.printEmployeeForm = function(input){
        console.log(this.name, "     ", this.jobTitle,  "     ", this.salary,  "     ", this.status)
}

var frank = new Employee("Frank", "Bookkeeper", 80000); 

var dee = new Employee("Dee", "Bird", 12000); 

dee.status = "Part-time";

var mac = new Employee("Mac", "Building Security", 30000); 

var charlie = new Employee("Charlie", "Rat Scourge", 18000);

employees.push(frank, dee, mac, charlie);

mac.printEmployeeForm();

frank.printEmployeeForm();

dee.printEmployeeForm();

charlie.printEmployeeForm();

console.log(employees);

