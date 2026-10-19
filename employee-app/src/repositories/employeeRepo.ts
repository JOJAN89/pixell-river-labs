
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
}

const departments = [
  "IT",
  "Finance",
  "Human Resources",
  "Marketing",
];

let employees: Employee[] = [];

export const employeeRepo = {
  getDepartments(): string[] {
    return [...departments];
  },

  getEmployees(): Employee[] {
    return [...employees];
  },

  getEmployeesByDepartment(department: string): Employee[] {
    return employees.filter(
      (employee) => employee.department === department
    );
  },

  createEmployee(employee: Employee): Employee {
    employees = [...employees, employee];
    return employee;
  },
};
