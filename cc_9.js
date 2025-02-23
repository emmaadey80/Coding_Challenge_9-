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


// Task 2: Creating a Manager Class (Inheritance & Method Overriding)
console.log("\nTask 2: Creating a Manager Class (Inheritance & Method Overriding)");

class Manager extends Employee { // extending employee to manager
    constructor(name, id, department, salary, teamSize) { // manager class with properties
        super(name, id, department, salary); 
        this.teamSize = teamSize; 
    }; 
    getDetails() { // include team size
        return `Manager: ${this.name}, Id: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    } 
    calculateBonus() { // calculating bonus for 10% of the managers annual salary
        return this.salary * 12 * 0.10; 
    }
    calculateAnnualSalary() { // modifying task 4 
        return (this.salary * 12) + this.calculateBonus(); // Manager's annual salary includes bonus
      }
}; 

// Logging test cases outputs:
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600


// Task 3: Creating a Company Class
console.log("\nTask 3: Creating a Company Class");

class Company { // creating a class 'company'
    constructor(name) { // propery for companys name
        this.name = name;
        this.employees = []; // array 'employees'
    };
    addEmployee(employee) { // adds employee to the array
        this.employees.push(employee);
    }
    listEmployees() { // logs employees details
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }
    // Task 4: 
    calculateTotalPayroll() { // returns sum of all employees salaries
        let total = 0; // total payroll
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary(); 
        }, 0); 
    }
    promoteToManager (employee, teamSize) {
        const index = this.employees.indexOf(employee);
         this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); // promotion to manager
     }
}

// Logging test cases output:
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

// Task 4: Implementing a Payroll System
console.log("\nTask 4: Implementing a Payroll System");

// Logging test cases output:
console.log(company.calculateTotalPayroll()); 
// Expected output: 165600 (assuming emp1 and mgr1 salaries)

// Task 5: Implementing Promotions
console.log("\nTask 5: Implementing Promotions");


// Logging test cases outputs:
company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"
