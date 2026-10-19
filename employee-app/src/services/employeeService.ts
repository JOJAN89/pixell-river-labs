
import {
  employeeRepo,
  type Employee,
} from "../repositories/employeeRepo";

export const employeeService = {
  validateEmployee(firstName: string, department: string) {
    if (firstName.trim().length < 3) {
      return "First name must have at least 3 characters.";
    }

    if (!employeeRepo.getDepartments().includes(department)) {
      return "Please select a valid department.";
    }

    return "";
  },

  createEmployee(
    firstName: string,
    lastName: string,
    department: string
  ): { employee: Employee | null; error: string } {
    const error = this.validateEmployee(firstName, department);

    if (error) {
      return { employee: null, error };
    }

    const employee: Employee = {
      id: Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      department,
    };

    return {
      employee: employeeRepo.createEmployee(employee),
      error: "",
    };
  },
};
