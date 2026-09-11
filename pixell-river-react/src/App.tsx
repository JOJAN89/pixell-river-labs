import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DepartmentSection } from "./components/DepartmentSection";

import employeeData from "./data/employees.json";
import type { Employee } from "./types/Employee";

function App() {
  const employees: Employee[] = employeeData;

  const departments = [
    ...new Set(employees.map((employee) => employee.department)),
  ];

  return (
    <>
      <Header />

      <main>
        {departments.map((department) => {
          const departmentEmployees = employees.filter(
            (employee) => employee.department === department
          );

          return (
            <DepartmentSection
              key={department}
              department={department}
              employees={departmentEmployees}
            />
          );
        })}
      </main>

      <Footer />
    </>
  );
}

export default App;