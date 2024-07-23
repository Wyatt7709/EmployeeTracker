// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to collect employee data
const collectEmployees = function () {
  const employees = [];
  let addEmployees = true;
  while (addEmployees) {
     
    
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
   let salary = prompt("Enter salary:");

  if(!salary || isNaN(salary)) {
    salary = 0
  }
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    }

    employees.push(newEmployee);
    addEmployees = confirm('Would you like to add an employee?');
  }
  return employees;
};

// Function to display the average salary
const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees to calculate average salary.');
    return;
  }
  const totalSalary = employeesArray.reduce((acc, emp) => acc + emp.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toFixed(2)}`);
};

// Function to select and display a random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees to select a random employee.');
    return;
  }
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = '';
  employeesArray.forEach(employee => {
    const newTableRow = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = employee.firstName;
    newTableRow.append(firstNameCell);
    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = employee.lastName;
    newTableRow.append(lastNameCell);
    const salaryCell = document.createElement('td');
    salaryCell.textContent = employee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    newTableRow.append(salaryCell);
    employeeTable.append(newTableRow);
  });
};

const trackEmployeeData = function () {
  const employees = collectEmployees();
  console.table(employees);
  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);
  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
