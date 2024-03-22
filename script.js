// When you click on the "add employee button a prompt should pop up"
const addEmployeesBtn = document.getElementById('add-employees-btn');
addEmployeesBtn.addEventListener('click', function() {
    const employeeData = collectEmployees();
    displayEmployees(employeeData);

    do {
        const employee = collectEmployeeData();
        employees.push(employee);
        const continueAdding = confirm("Do you want to add another employee?");
        if (!continueAdding) {
            break;
        }
    } while (tre)
    displayEmployees(employeeData);
    console.log(employeeData);
});

// Collecting the employees First and last name as well as their salary.
const collectEmployees = function(firstName, lastName, salary) {
    const employees = [];
    do {
        const firstName = prompt("Enter employee's first name:");
        if (!firstName) {
            break;
        }

       const lastName = prompt("Enter employee's last name:");
        if (!lastName) {
            break;
        }
        let salary = prompt("Enter employee's salary:");
        salary = isNaN(parseFloat(salary)) ? 0 : parseFloat(salary);

        employees.push({
            firstName: firstName,
            lastName: lastName,
            salary: salary
        });

        const continueAdding = confirm("Do you want to add another employee?");
        if (!continueAdding) {
            break;
        }
    } while (true);
    
    return employees;

    
 };
 
 
    


//This will be gathering the total for the employee salary than displaying the average salary.
const displayAverageSalary = function(employeesArray) {
    let totalSalary = 0;
    employeesArray.forEach(employee =>  {
        totalSalary += employee.salary;
    });

    const averageSalary = totalSalary / employeesArray.length;

    console.log(`Average Salary: $${averageSalary.toFixed(2)} Number of Employees: ${employeesArray.length}`);
 
}
// We'll be selecting a random employee as well as displaying a random employee.
const getRandomEmployee = function(employeesArray) {
   const randomIndex = Math.floor(Math.random() * employeesArray.length);
   const randomEmployee = employeesArray[randomIndex];
   console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName} ${randomEmployee.salary}`)
  
};
//We'll be displaying each employee's Array in the table.
const displayEmployees = function(employeesArray) {
    const table = document.getElementById('employee-table');

    employeesArray.forEach(employee => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = employee.firstName;

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = employee.lastName;

        const salaryCell = document.createElement('td');
        salaryCell.textContent = employee.salary;

        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(salaryCell);

        table.appendChild(row);
        
    });
    
};
