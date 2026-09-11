import type { Employee } from "../types/Employee";

interface DepartmentSectionProps {
  department: string;
  employees: Employee[];
}

export function DepartmentSection({
  department,
  employees,
}: DepartmentSectionProps) {
  return (
    <section>
      <h2>{department}</h2>

      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.firstName}
            {employee.lastName ? ` ${employee.lastName}` : ""}
          </li>
        ))}
      </ul>
    </section>
  );
}