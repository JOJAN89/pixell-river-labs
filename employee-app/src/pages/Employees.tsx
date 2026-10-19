
import { useState } from "react";
import type { FormEvent } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";
import {
  employeeRepo,
  type Employee,
} from "../repositories/employeeRepo";
import "../App.css";

export default function Employees() {
  const [departments] = useState(() =>
    employeeRepo.getDepartments()
  );

  const [employees, setEmployees] = useState<Employee[]>(() =>
    employeeRepo.getEmployees()
  );

  const firstName = useFormInput();
  const lastName = useFormInput();
  const department = useFormInput();

  function addEmployee(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    firstName.setMessage("");
    lastName.setMessage("");
    department.setMessage("");

    const validFirstName = firstName.validate((value) =>
      employeeService.validateEmployee(
        value,
        department.value
      ).includes("First name")
        ? "First name must have at least 3 characters."
        : ""
    );

    const validDepartment = department.validate((value) =>
      departments.includes(value)
        ? ""
        : "Please select a valid department."
    );

    if (!validFirstName || !validDepartment) {
      return;
    }

    const result = employeeService.createEmployee(
      firstName.value,
      lastName.value,
      department.value
    );

    if (result.error) {
      firstName.setMessage(result.error);
      return;
    }

    setEmployees(employeeRepo.getEmployees());

    firstName.reset();
    lastName.reset();
    department.reset();
  }

  return (
    <div className="app">
      <h2>Employee Management</h2>

      {departments.map((dept) => (
        <section key={dept}>
          <h3>{dept}</h3>
          <ul>
            {employees
              .filter((employee) => employee.department === dept)
              .map((employee) => (
                <li key={employee.id}>
                  {employee.firstName} {employee.lastName}
                </li>
              ))}
          </ul>
        </section>
      ))}

      <h2>Add New Employee</h2>

      <form onSubmit={addEmployee}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName.value}
            onChange={(e) =>
              firstName.setValue(e.target.value)
            }
          />
          {firstName.message && (
            <p className="error">{firstName.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName.value}
            onChange={(e) =>
              lastName.setValue(e.target.value)
            }
          />
          {lastName.message && (
            <p className="error">{lastName.message}</p>
          )}
        </div>

        <div>
          <select
            value={department.value}
            onChange={(e) =>
              department.setValue(e.target.value)
            }
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {department.message && (
            <p className="error">{department.message}</p>
          )}
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}
