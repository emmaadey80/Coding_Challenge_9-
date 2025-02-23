// Task 1: Creating an Employee Class
console.log("Task 1: Creating an Employee Class");


class Employee { // employee class with properties
    constructor(name, id, department, salary) { // properties in employee class
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    getDetails() { // method to get details that return formatted string
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() { // method to return employees salary
        return this.salary * 12;
    }
}

// Logging test cases outputs:
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000