import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

function EmployeeProvider({ children }) {

  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const savedEmployees = localStorage.getItem(
      "employees"
    );

    if (savedEmployees) {

      setEmployees(JSON.parse(savedEmployees));
      setLoading(false);

    } else {

      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {

          const departments = ["IT", "HR", "Finance"];

const employeeData = response.data.map((user, index) => ({
  id: user.id,
  name: user.name,
  department: departments[index % departments.length],
  email: user.email
}));

          setEmployees(employeeData);

          localStorage.setItem(
            "employees",
            JSON.stringify(employeeData)
          );

          setLoading(false);

        })
        .catch((error) => {

          console.log("API error:", error);

          setError("Unable to load employees.");

          setLoading(false);

        });
    }

  }, []);

  useEffect(() => {

    if (employees.length > 0) {

      localStorage.setItem(
        "employees",
        JSON.stringify(employees)
      );

    }

  }, [employees]);

  function addEmployee(newEmployee) {

    setEmployees((currentEmployees) => [

      ...currentEmployees,

      {
        ...newEmployee,
        id:
          Math.max(
            0,
            ...currentEmployees.map(
              (employee) => employee.id
            )
          ) + 1
      }

    ]);
  }

  function deleteEmployee(employeeId) {

    setEmployees((currentEmployees) =>
      currentEmployees.filter(
        (employee) => employee.id !== employeeId
      )
    );
  }

  function updateEmployee(updatedEmployee) {

    setEmployees((currentEmployees) =>
      currentEmployees.map((employee) => {

        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }

        return employee;

      })
    );
  }

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        addEmployee,
        deleteEmployee,
        updateEmployee,
        loading,
        error
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;